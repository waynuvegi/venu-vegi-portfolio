import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { IMPACT_STATS } from "@/data/content";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number;
    let frame: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 2000, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setValue(Math.floor(ease * to));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return <span ref={ref}>{prefix}{value}{suffix}</span>;
}

export function Impact() {
  const contextStats = IMPACT_STATS.filter((s) => !s.isCounter);
  const counterStats = IMPACT_STATS.filter((s) => s.isCounter);

  return (
    <section id="impact" className="py-28 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "38px 38px" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px opacity-25"
        style={{ background: `linear-gradient(90deg, transparent 5%, ${GOLD} 50%, transparent 95%)` }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-25"
        style={{ background: `linear-gradient(90deg, transparent 5%, ${GOLD} 50%, transparent 95%)` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] mb-5" style={{ color: GOLD }}>
            By The Numbers
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Selected Impact</h2>
          <div className="w-14 h-[3px] mx-auto mt-6 rounded-full" style={{ backgroundColor: GOLD }} />
        </motion.div>

        {/* Context stats row — scale & scope */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-5">
          {contextStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl px-6 py-6 text-center relative"
              style={{
                border: `1px solid rgba(255,255,255,0.12)`,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full" style={{ backgroundColor: GOLD }} />
              <div className="text-2xl md:text-3xl font-serif font-bold text-white mt-2 mb-1">{stat.display}</div>
              <p className="text-sm font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Counter stats — quantified achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {counterStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-2xl px-5 py-8 text-center relative"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: `1px solid rgba(255,255,255,0.15)`,
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded-full" style={{ backgroundColor: GOLD }} />
              <div className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-3" style={{ color: GOLD }}>
                {stat.isCounter && stat.counter !== undefined ? (
                  <Counter to={stat.counter} prefix={stat.prefix ?? ""} suffix={stat.suffix ?? ""} />
                ) : (
                  stat.display
                )}
              </div>
              <p className="text-sm font-bold text-white mb-1">{stat.label}</p>
              <p className="text-[11px] leading-snug" style={{ color: "rgba(255,255,255,0.42)" }}>{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
