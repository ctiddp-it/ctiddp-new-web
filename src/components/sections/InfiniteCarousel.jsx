"use client";

import { useRef, useEffect, useCallback, useState } from "react";

/**
 * InfiniteCarousel - Curved row carousel matching the Dribbble effect.
 * 
 * Fully responsive - automatically adjusts card sizes, curve amount,
 * and spacing based on viewport size while maintaining the visual effect.
 */
export default function InfiniteCarousel({
  images = [],
  direction = "left",
  speed = 80,
  cardWidth: baseCardWidth = 420,
  cardHeight: baseCardHeight = 300,
  gap: baseGap = 16,
  curveAmount: baseCurveAmount = 250,
  curveDirection = "up",
  pauseOnHover = false,
  centerContent = null,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const scrollAnimRef = useRef(null);
  const curveAnimRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTimeRef = useRef(null);
  
  // Responsive sizing state
  const [dimensions, setDimensions] = useState({
  cardWidth: baseCardWidth,
  cardHeight: baseCardHeight,
  gap: baseGap,
  curveAmount: baseCurveAmount,
  isMobile: false,
});

  // ─── Responsive sizing logic ────────────────────────────────────────────────
  const updateDimensions = useCallback(() => {
    const width = window.innerWidth;
    
    // Mobile (< 640px)
    if (width < 640) {
      setDimensions({
        cardWidth: Math.min(280, width * 0.8),
        cardHeight: Math.min(200, width * 0.57),
        gap: 12,
        curveAmount: 120,
        isMobile: true,
      });
    } 
    // Tablet (640px - 1024px)
    else if (width < 1024) {
      const scale = width / 1024;
      setDimensions({
        cardWidth: 300 + (width - 640) * 0.2,
        cardHeight: 220 + (width - 640) * 0.15,
        gap: 14,
        curveAmount: 160 + (width - 640) * 0.15,
        isMobile: false,
      });
    } 
    // Small Desktop (1024px - 1440px)
    else if (width < 1440) {
      const scale = (width - 1024) / 416;
      setDimensions({
        cardWidth: 340 + 80 * scale,
        cardHeight: 250 + 50 * scale,
        gap: 16,
        curveAmount: 200 + 50 * scale,
        isMobile: false,
      });
    } 
    // Large Desktop (1440px+)
    else {
      setDimensions({
        cardWidth: baseCardWidth,
        cardHeight: baseCardHeight,
        gap: baseGap,
        curveAmount: baseCurveAmount,
        isMobile: false,
      });
    }
  }, [baseCardWidth, baseCardHeight, baseGap, baseCurveAmount]);

  // ─── Resize observer ───────────────────────────────────────────────────────
  useEffect(() => {
    updateDimensions();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateDimensions, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [updateDimensions]);

  const { cardWidth, cardHeight, gap, curveAmount } = dimensions;
  
  // Triple the images for seamless looping
  const repeated = [...images, ...images, ...images];
  const itemWidth = cardWidth + gap;
  const singleSetWidth = images.length * itemWidth;

  // ─── Scroll loop ──────────────────────────────────────────────────────────
  const scrollAnimate = useCallback(
    (timestamp) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      if (!pausedRef.current) {
        // Adjust speed based on screen size for consistent visual flow
        const speedMultiplier = window.innerWidth < 640 ? 0.7 : 1;
        posRef.current += (direction === "left" ? -1 : 1) * speed * speedMultiplier * delta;

        if (direction === "left" && posRef.current <= -singleSetWidth) {
          posRef.current += singleSetWidth;
        } else if (direction === "right" && posRef.current >= 0) {
          posRef.current -= singleSetWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${posRef.current}px)`;
        }
      } else {
        lastTimeRef.current = timestamp;
      }

      scrollAnimRef.current = requestAnimationFrame(scrollAnimate);
    },
    [direction, speed, singleSetWidth]
  );

  // ─── Curve loop ───────────────────────────────────────────────────────────
  const updateCurve = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) {
      curveAnimRef.current = requestAnimationFrame(updateCurve);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const halfW = containerRect.width / 2;

    const cards = track.children;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;

      // Normalised: 0 = container centre, ±1 = container edges, >±1 = offscreen
      const norm = (cardCenterX - containerCenterX) / halfW;
      const clamped = Math.max(-2, Math.min(2, norm));

      // Parabola curve calculation
      const arcY =
        curveDirection === "up"
          ? -(clamped * clamped * curveAmount)
          : clamped * clamped * curveAmount;

      // Subtle scale-down for off-centre cards (depth feel)
      const scale = 1 - Math.min(Math.abs(clamped) * 0.04, 0.1);

      // Smoother z-index transition
      const zIndexValue = Math.round((1 - Math.min(Math.abs(clamped), 1)) * 10);
      
      card.style.transform = `translateY(${arcY.toFixed(2)}px) scale(${scale.toFixed(4)})`;
      card.style.zIndex = String(Math.max(1, zIndexValue));
    }

    curveAnimRef.current = requestAnimationFrame(updateCurve);
  }, [curveAmount, curveDirection]);

  // ─── Mount ────────────────────────────────────────────────────────────────
  useEffect(() => {
    posRef.current = direction === "right" ? -singleSetWidth : 0;
    lastTimeRef.current = null;

    scrollAnimRef.current = requestAnimationFrame(scrollAnimate);
    curveAnimRef.current = requestAnimationFrame(updateCurve);

    return () => {
      cancelAnimationFrame(scrollAnimRef.current);
      cancelAnimationFrame(curveAnimRef.current);
    };
  }, [scrollAnimate, updateCurve, direction, singleSetWidth]);

  // Reset position when dimensions change
  useEffect(() => {
    if (direction === "right") {
      posRef.current = -singleSetWidth;
    } else {
      posRef.current = 0;
    }
    lastTimeRef.current = null;
  }, [singleSetWidth, direction]);

  const handleMouseEnter = () => {
    if (pauseOnHover) pausedRef.current = true;
  };
  const handleMouseLeave = () => {
    if (pauseOnHover) {
      pausedRef.current = false;
      lastTimeRef.current = null;
    }
  };

  // Calculate responsive vertical padding
  const verticalPaddingTop = Math.max(curveAmount + 40, 100);
  const verticalPaddingBottom = dimensions.isMobile ? 60 : 40;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        paddingTop: `${verticalPaddingTop}px`,
        paddingBottom: `${verticalPaddingBottom}px`,
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      {centerContent && (
        <div
          className="carousel-center-content"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 50,
            pointerEvents: "none",
            width: "90%",
            maxWidth: "640px",
            display: "flex",
            justifyContent: "center",
            padding: "0 20px",
          }}
        >
          <div 
            style={{ 
              pointerEvents: "auto",
              width: "100%",
            }}
          >
            {centerContent}
          </div>
        </div>
      )}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: `${gap}px`,
          willChange: "transform",
          width: "max-content",
        }}
      >
        {repeated.map((src, i) => (
          <div
            key={`${src}-${i}`}
            style={{
              flexShrink: 0,
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              borderRadius: "clamp(8px, 2vw, 16px)",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              willChange: "transform",
              boxShadow: "0 clamp(4px, 1vw, 8px) clamp(16px, 3vw, 32px) rgba(0,0,0,0.18)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 clamp(8px, 2vw, 12px) clamp(24px, 4vw, 48px) rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 clamp(4px, 1vw, 8px) clamp(16px, 3vw, 32px) rgba(0,0,0,0.18)";
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Carousel image ${(i % images.length) + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                pointerEvents: "none",
                userSelect: "none",
              }}
              draggable={false}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.35) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Add CSS for responsive adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .carousel-center-content {
            width: 95%;
            padding: 0 16px;
          }
        }
        
        @media (min-width: 1440px) {
          .carousel-center-content {
            max-width: 800px;
          }
        }
      `}</style>
    </div>
  );
}