"use client";

import { useRef, useEffect, useState } from 'react';

const STATS = [
    { digits: "100", suffix: "%", label: "Customs Clearance Success Rate" },
    { digits: "300", suffix: "+", label: "Containers Imported" },
    { digits: "1200", suffix: "+", label: "Shipments Cleared" },
    { digits: "16250", suffix: "+", label: "CBM Shipped" },
];

// ── Slot Machine Constants ──────────────────────────────────────────────────
const ALL_DIGITS = '0123456789';
const CELL_H = 110;
const CELL_MB = 80;
const LOOP_COUNT = 30;



// ── Slot Machine Stat Item ──────────────────────────────────────────────────
function SlotStatItem({ digits, suffix, label, baseDelay = 0 }) {
    const reelRefs = useRef([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        const digitArr = digits.split('');
        const rafIds = [];

        digitArr.forEach((finalDigit, colIndex) => {
            const track = reelRefs.current[colIndex];
            if (!track) return;

            const direction = colIndex % 2 === 0 ? 'up' : 'down';
            const startDelay = baseDelay + 400 + colIndex * 350;
            const spinDuration = 2500 + colIndex * 400;
            const settleDuration = 1500;

            // Build digit pool
            const pool = [];
            for (let i = 0; i < LOOP_COUNT; i++) {
                pool.push(ALL_DIGITS[Math.floor(Math.random() * 10)]);
            }
            pool.push(finalDigit);
            if (direction === 'down') {
                pool.reverse();
                pool.unshift(finalDigit);
            }

            // Populate cells
            track.innerHTML = '';
            pool.forEach(d => {
                const cell = document.createElement('div');
                cell.style.cssText = `
          height: ${CELL_H}px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(28px, 10vw, 100px);
          font-weight: 600;
          font-family: 'Cormorant Garamond', Georgia, serif;
          line-height: 1;
          flex-shrink: 0;
          user-select: none;
          color: inherit;
        `;
                cell.textContent = d;
                track.appendChild(cell);
            });

            const finalIdx = direction === 'up' ? LOOP_COUNT : 0;
            const startOffset = direction === 'up' ? 0 : -LOOP_COUNT * CELL_H;
            track.style.transform = `translateY(${startOffset}px)`;

            const targetY = -(finalIdx * CELL_H);
            const totalTrackLen = pool.length * CELL_H;

            function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
            function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

            let spinStart = null;
            let settled = false;

            function tick(now) {
                if (!spinStart) spinStart = now;
                const elapsed = now - spinStart;

                if (!settled) {
                    const progress = Math.min(elapsed / spinDuration, 1);
                    const eased = easeInOut(progress);
                    const spinAmount = direction === 'up'
                        ? -(totalTrackLen - CELL_H) * eased
                        : (totalTrackLen - CELL_H) * eased;
                    const baseY = direction === 'up' ? 0 : -((pool.length - 1) * CELL_H);
                    track.style.transform = `translateY(${baseY + spinAmount}px)`;

                    if (progress < 1) {
                        rafIds.push(requestAnimationFrame(tick));
                    } else {
                        settled = true;
                        const settleStart = performance.now();
                        const currentY = parseFloat(track.style.transform.match(/-?\d+\.?\d*/)?.[0] || 0);
                        function settle(now2) {
                            const t = Math.min((now2 - settleStart) / settleDuration, 1);
                            track.style.transform = `translateY(${currentY + (targetY - currentY) * easeOut(t)}px)`;
                            if (t < 1) rafIds.push(requestAnimationFrame(settle));
                            else track.style.transform = `translateY(${targetY}px)`;
                        }
                        rafIds.push(requestAnimationFrame(settle));
                    }
                }
            }

            const timeoutId = setTimeout(() => {
                rafIds.push(requestAnimationFrame(tick));
            }, startDelay);
            rafIds.push({ isTimeout: true, id: timeoutId });
        });

        return () => {
            rafIds.forEach(entry => {
                if (entry && entry.isTimeout) clearTimeout(entry.id);
                else cancelAnimationFrame(entry);
            });
        };
    }, [digits, baseDelay]);

    return (
        <div className="text-center">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', height: `${isMobile ? CELL_MB : CELL_H}px`, overflow: 'hidden' }}>
                {digits.split('').map((_, i) => (
                    <div key={i} style={{ width: 'clamp(28px, 6vw, 60px)', overflow: 'hidden' }}>
                        <div
                            ref={el => (reelRefs.current[i] = el)}
                            style={{ display: 'flex', flexDirection: 'column', willChange: 'transform' }}
                        />
                    </div>
                ))}
                {suffix && (
                    <div style={{
                        fontSize: 'clamp(28px, 6vw, 60px)', fontWeight: 600,
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        color: 'inherit', lineHeight: `${CELL_H}px`, paddingLeft: '1px',
                    }}>
                        {suffix}
                    </div>
                )}
            </div>
            <span className="block text-[10px] md:text-[25px] tracking-[1.5px] uppercase mt-2 text-gray-900 font-bold md:font-normal">
                {label}
            </span>
        </div>
    );
}

export default function StatsSection() {
    return (
        <section className="w-full h-[310px] md:h-[500px] relative overflow-hidden bg-surface flex items-center">
            {/* DOTTED MAP BACKGROUND */}
            <div
                className="absolute inset-0 pointer-events-none opacity-25
        bg-[url('/images/bg-map.png')] bg-no-repeat bg-center bg-size-[150%] md:bg-size-[78%]"
                style={{
                    maskImage:
                        "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                }}
            />

            {/* CONTENT */}
            <div className="relative z-40 w-full flex items-center justify-center px-4">
                <div className="w-full mx-auto pointer-events-auto glass-panel-entrance">
                    <div className="px-6 py-5 md:px-8 md:py-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center text-blue-light">
                            {STATS.map((s, i) => (
                                <SlotStatItem
                                    key={s.label}
                                    digits={s.digits}
                                    suffix={s.suffix}
                                    label={s.label}
                                    baseDelay={i * 80}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}