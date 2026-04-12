"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { geoMercator, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";

const W = 960;
const H = 500;

const projection = geoMercator().scale(153).translate([W / 2, H / 2 + 40]);
const project = ([lon, lat]) => projection([lon, lat]);

const LOCATIONS = {
  india: {
    label: "India",
    markerLonLat: [78.9629, 20.5937],
    viewBox: "615 185 220 116",
    cities: [
      { id: "vizag",     name: "Visakhapatnam", lonLat: [83.3180, 17.6868] },
      { id: "chennai",   name: "Chennai",        lonLat: [80.2707, 13.0827] },
      { id: "bangalore", name: "Bengaluru",      lonLat: [77.5946, 12.9716] },
    ],
  },
  china: {
    label: "China",
    markerLonLat: [104.1954, 35.8617],
    viewBox: "698 158 200 105",
    cities: [
      { id: "guangzhou", name: "Guangzhou", lonLat: [113.2644, 23.1291] },
      { id: "foshan",    name: "Foshan",    lonLat: [113.1216, 23.0219], labelBelow: true },
    ],
  },
};

const TRADE_DESTINATIONS = [
  { id: "india",        label: "India",        lonLat: [78.9629, 20.5937],   countryId: "356"  },
  { id: "usa",          label: "USA",          lonLat: [-98.5795, 39.8283],  countryId: "840"  },
  { id: "saudi",        label: "Saudi Arabia", lonLat: [45.0792, 23.8859],   countryId: "682"  },
  { id: "iran",         label: "Iran",         lonLat: [53.6880, 32.4279],   countryId: "364"  },
  { id: "iraq",         label: "Iraq",         lonLat: [43.6793, 33.2232],   countryId: "368"  },
  { id: "israel",       label: "Israel",       lonLat: [34.8516, 31.0461],   countryId: "376"  },
  { id: "kuwait",       label: "Kuwait",       lonLat: [47.4818, 29.3117],   countryId: "414"  },
  { id: "canada",       label: "Canada",       lonLat: [-96.8165, 56.1304],  countryId: "124"  },
  { id: "uk",           label: "UK",           lonLat: [-3.4360, 55.3781],   countryId: "826"  },
  { id: "europe",       label: "Europe",       lonLat: [10.4515, 51.1657],   countryId: "276"  },
  { id: "russia",       label: "Russia",       lonLat: [105.3188, 61.5240],  countryId: "643"  },
  { id: "brazil",       label: "Brazil",       lonLat: [-51.9253, -14.2350], countryId: "76"   },
  { id: "australia",    label: "Australia",    lonLat: [133.7751, -25.2744], countryId: "36"   },
  { id: "africa",       label: "Africa",       lonLat: [34.5085, -8.7832],   countryId: "404"  },
  { id: "japan",        label: "Japan",        lonLat: [138.2529, 36.2048],  countryId: "392"  },
  { id: "korea",        label: "South Korea",  lonLat: [127.7669, 35.9078],  countryId: "410"  },
];

const TRADE_PARTNER_IDS = new Set(TRADE_DESTINATIONS.map(d => d.countryId));

const WORLD_VIEWBOX = `0 0 ${W} ${H}`;
const COUNTRY_IDS   = { "356": "india", "156": "china" };
const GOLD       = "#2563EB";
const BLUE       = "#FFF";
const GOLD_LIGHT = "#60A5FA";
const soft      = [0.43, 0.13, 0.23, 0.96];
const cinematic = [0.76, 0,    0.24, 1   ];

const PARTICLES = [
  { x: "8%",  y: "15%", s: 2,   d: 0   },
  { x: "15%", y: "72%", s: 1.5, d: 0.8 },
  { x: "22%", y: "38%", s: 2.5, d: 1.6 },
  { x: "44%", y: "12%", s: 2,   d: 2.1 },
  { x: "63%", y: "25%", s: 1,   d: 0.9 },
  { x: "80%", y: "42%", s: 1.5, d: 0.3 },
  { x: "88%", y: "78%", s: 1,   d: 2.4 },
];

const STATS = [
  { value: "5",    label: "Operataional Hubs"       },
  { value: "17",   label: "Countries Served" },
  { value: "8+",  label: "Years in DDP"      },
];

function arcPath(from, to, curvature = 0.35) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const px = -dy / dist;
  const py = dx / dist;
  const offset = dist * curvature;
  const cpx = mx + px * offset;
  const cpy = my + py * offset;
  return `M${x1},${y1} Q${cpx},${cpy} ${x2},${y2}`;
}

function TradeRoute({ from, to, delay, index }) {
  const reduced = useReducedMotion();
  const d = arcPath(from, to);
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={GOLD}
      strokeWidth={0.8}
      strokeDasharray="4 4"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.35 }}
      transition={{ duration: reduced ? 0.01 : 1.4, delay: 0.5 + delay, ease: soft }}
      style={{ filter: `drop-shadow(0 0 1.5px ${GOLD})` }}
    />
  );
}

function DestinationDot({ px, label, delay, isChina }) {
  const [hovered, setHovered] = useState(false);
  const [x, y] = px;
  return (
    <g
      transform={`translate(${x}, ${y})`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default" }}
    >
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.6 + delay, ease: soft }}
      >
        <circle
          r={hovered ? 7 : 5}
          fill="none"
          stroke={GOLD}
          strokeWidth={0.7}
          opacity={0.22}
          className="gp-ring"
          style={{ transition: "r 0.2s" }}
        />
        <circle
          r={hovered ? 3 : 2}
          fill={GOLD_LIGHT}
          opacity={0.75}
          style={{
            filter: `drop-shadow(0 0 ${hovered ? 6 : 3}px ${GOLD})`,
            transition: "r 0.2s ease, filter 0.2s ease",
          }}
        />
        {hovered && (
          <g transform="translate(0, -14)">
            <rect x={-24} y={-7} width={48} height={12} rx={3} fill="rgba(8,7,5,0.88)" stroke="rgba(37,99,235,0.55)" strokeWidth={0.6} />
            <text textAnchor="middle" y={3.5} fontSize={5.5} fill={GOLD_LIGHT} fontWeight={600} letterSpacing={0.3} fontFamily="inherit" style={{ pointerEvents: "none" }}>
              {label}
            </text>
          </g>
        )}
      </motion.g>
    </g>
  );
}

export default function GlobalPresence() {
  const [view,      setView]      = useState("world");
  const [hovered,   setHovered]   = useState(null);
  const [revealed,  setRevealed]  = useState(false);
  const [countries, setCountries] = useState([]);
  const sectionRef = useRef(null);
  const reduced    = useReducedMotion();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRevealed(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((r) => r.json())
      .then((topo) => setCountries(feature(topo, topo.objects.countries).features))
      .catch(console.error);
  }, []);

  const pathGen = useMemo(() => geoPath().projection(projection), []);
  const graticulePath = useMemo(() => pathGen(geoGraticule().step([20, 20])()), [pathGen]);

  const cityPx = useMemo(() => {
    const out = {};
    for (const [region, loc] of Object.entries(LOCATIONS)) {
      out[region] = loc.cities.map((c) => ({ ...c, px: project(c.lonLat) }));
    }
    return out;
  }, []);

  const tradeDestPx = useMemo(() =>
    TRADE_DESTINATIONS.map(d => ({ ...d, px: project(d.lonLat) })),
  []);

  const chinaPxWorld = useMemo(() => project(LOCATIONS.china.markerLonLat), []);

  const pinScale = useMemo(() => {
    if (view === "world") return 1;
    const vbW = parseFloat(LOCATIONS[view].viewBox.split(" ")[2]);
    return (vbW / W) * 1.75;
  }, [view]);

  const viewBox = view !== "world" ? LOCATIONS[view].viewBox : WORLD_VIEWBOX;
  const goTo    = (next) => { setHovered(null); setView(next); };

  const indiaPx = project(LOCATIONS.india.markerLonLat);
  const chinaPx = project(LOCATIONS.china.markerLonLat);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden
                 flex flex-col items-center justify-center
                 px-0
                 pt-10 md:pt-20 pb-10 md:pb-20"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-3/5 h-[280px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="gp-particle absolute rounded-full pointer-events-none hidden sm:block"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: GOLD_LIGHT, opacity: 0.22, animationDelay: `${p.d}s` }}
        />
      ))}

      {/* ── HEADER ── */}
      <div className="px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: soft }}
          className="text-center mb-8 sm:mb-10 z-10 relative px-2"
        >
          <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[0.65rem] md:text-[0.68rem] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px]">
              Our Reach
            </span>
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,4vw,56px)] font-light leading-[1.1] mb-3.5">
            Global{" "}
            <span className="italic text-gold-light">Presence</span>
          </h2>

          <p className="text-[0.88rem] sm:text-[0.96rem] text-muted max-w-[320px] sm:max-w-[440px] mx-auto leading-[1.75]">
            End-to-end DDP logistics, seamlessly bridging India &amp; China
            for businesses that demand precision.
          </p>
        </motion.div>
      </div>

      {/* ── FULL-WIDTH MAP STAGE ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={revealed ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: soft }}
        className="relative z-[5] w-full"
      >
        {/* Full-width map container */}
        <div className="w-full overflow-hidden relative" style={{ background: "var(--gp-ocean)" }}>
          
          {/* SVG with preserved aspect ratio */}
          <motion.svg
            viewBox={WORLD_VIEWBOX}
            animate={{ viewBox }}
            transition={{ duration: reduced ? 0.01 : 1.25, ease: cinematic }}
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
          >
            <rect x={0} y={0} width={W} height={H} fill="var(--gp-ocean)" />
            <path d={graticulePath} fill="none" stroke="var(--gp-graticule)" strokeWidth={0.4} />

            {/* Countries */}
            {countries.map((geo, geoIdx) => {
              const region   = COUNTRY_IDS[geo.id?.toString()];
              const isIndia  = region === "india";
              const isChina  = region === "china";
              const isFocus  = (view === "india" && isIndia) || (view === "china" && isChina);
              const isMainTarget = isIndia || isChina;
              const isTradePartner = view === "world" && !isMainTarget && TRADE_PARTNER_IDS.has(geo.id?.toString());

              return (
                <path
                  key={`country-${geo.id ?? geoIdx}`}
                  d={pathGen(geo)}
                  fill={
                    isFocus ? "rgba(37,99,235,0.22)"
                    : isTradePartner ? "rgba(37,99,235,0.10)"
                    : isMainTarget ? "var(--gp-land-focus)"
                    : "var(--gp-land)"
                  }
                  stroke={
                    isMainTarget ? "rgba(37,99,235,0.4)"
                    : isTradePartner ? "rgba(37,99,235,0.22)"
                    : "var(--gp-border)"
                  }
                  strokeWidth={isMainTarget ? 0.55 : isTradePartner ? 0.4 : 0.3}
                  style={{ cursor: isMainTarget && view === "world" ? "pointer" : "default", transition: "fill 0.45s ease" }}
                  onClick={() => isMainTarget && view === "world" && goTo(region)}
                  onMouseEnter={(e) => { if (isMainTarget && view === "world") e.currentTarget.style.fill = "rgba(37,99,235,0.32)"; }}
                  onMouseLeave={(e) => { if (isMainTarget && view === "world") e.currentTarget.style.fill = isFocus ? "rgba(37,99,235,0.22)" : "var(--gp-land-focus)"; }}
                />
              );
            })}

            {/* Trade routes from China to all destinations */}
            {view === "world" && tradeDestPx.map((dest, idx) => (
              <TradeRoute
                key={`route-${dest.id}`}
                from={chinaPxWorld}
                to={dest.px}
                delay={idx * 0.07}
                index={idx}
              />
            ))}

            {/* Destination dots */}
            {view === "world" && tradeDestPx.map((dest, idx) => (
              <DestinationDot
                key={`dest-dot-${dest.id}`}
                px={dest.px}
                label={dest.label}
                delay={idx * 0.07}
              />
            ))}

            {/* World markers (China & India clickable) */}
            {view === "world" && Object.entries(LOCATIONS).map(([region, loc]) => {
              const [mx, my] = project(loc.markerLonLat);
              return (
                <g key={`marker-${region}`} transform={`translate(${mx}, ${my})`} onClick={() => goTo(region)} style={{ cursor: "pointer" }}>
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: soft }}>
                    <circle r={15} fill="none" stroke={GOLD} strokeWidth={0.9} opacity={0.2} className="gp-ring" />
                    <circle r={9}  fill="none" stroke={GOLD} strokeWidth={1.1} opacity={0.38} className="gp-ring2" />
                    <circle r={4.5} fill={GOLD} className="gp-dot" style={{ filter: `drop-shadow(0 0 4px ${GOLD})` }} />
                    <text textAnchor="middle" y={22} fontSize={9} fill={GOLD_LIGHT} fontWeight={700} letterSpacing={0.9} fontFamily="inherit">
                      {loc.label}
                    </text>
                  </motion.g>
                </g>
              );
            })}

            {/* City pins — zoomed region view */}
            {view !== "world" && cityPx[view]?.map((city, idx) => {
              const [px, py] = city.px;
              const isHov    = hovered === city.id;
              const stemY1   = city.labelBelow ?  3 : -3;
              const stemY2   = city.labelBelow ? 13 : -13;
              const labelY   = city.labelBelow ? 18 : -18;
              return (
                <g key={`city-${city.id}`} transform={`translate(${px}, ${py}) scale(${pinScale})`}>
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.6 + idx * 0.15, ease: soft }}
                    onMouseEnter={() => setHovered(city.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <circle r={10} fill="none" stroke={GOLD} strokeWidth={0.7} opacity={0.25} className="gp-ring" />
                    <circle r={isHov ? 7 : 6} fill="none" stroke={GOLD} strokeWidth={isHov ? 0.9 : 0.6} opacity={isHov ? 0.5 : 0.3} className="gp-ring2" style={{ transition: "r 0.2s, opacity 0.2s" }} />
                    <circle r={isHov ? 4 : 3} fill={GOLD} className="gp-dot" style={{ filter: `drop-shadow(0 0 ${isHov ? 8 : 4}px ${GOLD})`, transition: "r 0.2s ease, filter 0.2s ease" }} />
                    <line x1={0} y1={stemY1} x2={0} y2={stemY2} stroke={GOLD} strokeWidth={0.6} opacity={0.55} />
                    <g transform={`translate(0, ${labelY})`}>
                      <rect x={-34} y={-8} width={68} height={14} rx={4} fill="var(--gp-label-bg)" stroke={isHov ? "rgba(37,99,235,0.7)" : "rgba(37,99,235,0.3)"} strokeWidth={0.7} style={{ transition: "stroke 0.2s ease" }} />
                      <text textAnchor="middle" y={4} fontSize={6} fill={isHov ? GOLD_LIGHT : "rgba(96,165,250,0.85)"} fontWeight={600} letterSpacing={0.3} fontFamily="inherit" style={{ transition: "fill 0.2s ease", pointerEvents: "none" }}>
                        {city.name}
                      </text>
                    </g>
                  </motion.g>
                </g>
              );
            })}
          </motion.svg>

          {/* Vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-[6]"
            style={{ background: "radial-gradient(ellipse at center, transparent 45%, var(--gp-vignette) 100%)" }}
          />

          {/* Top fade */}
          <div
            className="absolute top-0 left-0 right-0 h-[18%] pointer-events-none z-[5]"
            style={{ background: "linear-gradient(to bottom, var(--gp-fade-top) 0%, transparent 100%)" }}
          />

          {/* Region badge */}
          <AnimatePresence>
            {view !== "world" && (
              <motion.div
                key={`badge-${view}`}
                initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.45, delay: 0.2, ease: soft }}
                className="absolute top-4 left-4 md:top-6 md:left-6 z-20 flex items-center gap-2 rounded-[0.6rem] px-3 py-1.5"
                style={{ background: "rgba(0,0,0,0.65)", border: "1px solid rgba(37,99,235,0.28)", backdropFilter: "blur(12px)" }}
              >
                <span className="gp-badge-dot w-1.5 h-1.5 rounded-full bg-gold inline-block shrink-0" style={{ boxShadow: `0 0 7px ${GOLD}` }} />
                <span className="text-[0.74rem] text-white font-semibold tracking-[0.07em] uppercase">
                  {LOCATIONS[view].label}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* World hint */}
          {view === "world" && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 pointer-events-none"
            >
              <span className="w-[18px] h-px bg-gold opacity-35 block shrink-0" />
              <span className="text-[0.65rem] text-muted tracking-[0.14em] uppercase whitespace-nowrap">
                Click a region to explore
              </span>
              <span className="w-[18px] h-px bg-gold opacity-35 block shrink-0" />
            </motion.div>
          )}

          {/* Trade routes legend */}
          {view === "world" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center gap-1.5 rounded-[0.55rem] px-2.5 py-1.5"
              style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(37,99,235,0.2)", backdropFilter: "blur(10px)" }}
            >
              <svg width="18" height="6" viewBox="0 0 18 6">
                <line  x1="0" y1="3" x2="18" y2="3" stroke={BLUE} strokeWidth="1.2" strokeDasharray="4 3" strokeLinecap="round" opacity="0.7" />
              </svg>
              <span className="text-[0.62rem] text-[#fff] tracking-[0.1em] uppercase">
                Trade Routes
              </span>
            </motion.div>
          )}
        </div>

        {/* Nav buttons */}
        <AnimatePresence mode="wait">
          {(view === "india" || view === "china") && (
            <motion.div
              key={`nav-${view}`}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-[-3.6rem] flex gap-2 flex-wrap justify-center w-full px-2"
            >
              <NavBtn onClick={() => goTo("world")} variant="ghost">← Global View</NavBtn>
              <NavBtn onClick={() => goTo(view === "india" ? "china" : "india")} variant="gold">
                View {view === "india" ? "China" : "India"} Operations →
              </NavBtn>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── STATS ── */}
      <div className="px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease: soft }}
          className="mt-24 sm:mt-28 flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-[clamp(2.5rem,7vw,5.5rem)] justify-center z-[5] relative"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={`stat-${s.label}`}
              initial={{ opacity: 0, y: 12 }}
              animate={revealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 + i * 0.1, ease: soft }}
              className="text-center"
            >
              <div className="italic bg-linear-to-br font-bold text-blue-500"
              style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
                fontSize: 'clamp(40px, 7.5vw, 35px)',
              }}
              >
                {s.value}
              </div>
              <div className="text-[0.62rem] sm:text-[0.68rem] text-muted mt-1.5 tracking-[0.12em] uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Styles ── */}
      <style>{`
        :root {
          --gp-ocean:      #D8E8F0;
          --gp-fade-top:   rgba(216,232,240,0.85);
          --gp-vignette:   rgba(180,210,225,0.35);
          --gp-land:       #AABFCC;
          --gp-land-focus: #8AAFC4;
          --gp-border:     #7A9EAE;
          --gp-graticule:  rgba(0,0,0,0.045);
          --gp-label-bg:   rgba(240,247,252,0.92);
        }
        .dark {
          --gp-ocean:      #0C1219;
          --gp-fade-top:   rgba(12,18,25,0.8);
          --gp-vignette:   rgba(0,0,0,0.65);
          --gp-land:       #1A2530;
          --gp-land-focus: #1E2E3E;
          --gp-border:     #263545;
          --gp-graticule:  rgba(255,255,255,0.035);
          --gp-label-bg:   rgba(8,7,5,0.85);
        }
        @keyframes gp-ring-pulse {
          0%   { transform: scale(0.85); opacity: 0.55; }
          70%  { transform: scale(2.2);  opacity: 0;   }
          100% { transform: scale(2.2);  opacity: 0;   }
        }
        @keyframes gp-ring2-pulse {
          0%   { transform: scale(0.85); opacity: 0.45; }
          70%  { transform: scale(2.7);  opacity: 0;   }
          100% { transform: scale(2.7);  opacity: 0;   }
        }
        @keyframes gp-dot-pulse {
          0%, 100% { filter: drop-shadow(0 0 4px #2563EB);  }
          50%      { filter: drop-shadow(0 0 10px #2563EB); }
        }
        @keyframes gp-badge-dot-pulse {
          0%, 100% { box-shadow: 0 0 6px 2px rgba(37,99,235,0.55); }
          50%      { box-shadow: 0 0 12px 4px rgba(37,99,235,0.25); }
        }
        @keyframes gp-float {
          0%, 100% { transform: translateY(0px)  scale(1);   }
          50%      { transform: translateY(-9px) scale(1.1); }
        }
        .gp-particle  { animation: gp-float           4s ease-in-out infinite; }
        .gp-ring      { animation: gp-ring-pulse      2.8s ease-out  infinite; }
        .gp-ring2     { animation: gp-ring2-pulse     2.8s ease-out  infinite 0.6s; }
        .gp-dot       { animation: gp-dot-pulse       2.4s ease-in-out infinite; }
        .gp-badge-dot { animation: gp-badge-dot-pulse 2s   ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function NavBtn({ children, onClick, variant }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={[
        "rounded-[0.55rem] px-5 py-2.5",
        "text-[0.77rem] tracking-[0.05em]",
        "whitespace-nowrap backdrop-blur-md cursor-pointer font-[inherit]",
        variant === "gold"
          ? "bg-gradient-to-br from-gold to-gold-light border border-transparent font-semibold"
          : "bg-white/5 border border-[rgba(37,99,235,0.2)] text-muted font-normal",
      ].join(" ")}
      style={variant === "gold" ? { color: "#050508" } : undefined}
    >
      {children}
    </motion.button>
  );
}