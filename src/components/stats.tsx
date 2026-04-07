import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";

function Counter({ from, to, duration = 2, suffix = "", prefix = "" }: {
  from: number; to: number; duration?: number; suffix?: string; prefix?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(easeProgress * (to - from) + from));
      if (progress < 1) animationFrame = requestAnimationFrame(updateCounter);
    };
    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{prefix}{value}{suffix}</span>;
}

const stats = [
  {
    value: 300, prefix: "$", suffix: "M+",
    label: "Capital Raised",
    desc: "Equity & debt financing",
    detail: "Across $100M–$700M ARR businesses",
  },
  {
    value: 8, prefix: "", suffix: "+",
    label: "M&A Deals",
    desc: "Advised & executed",
    detail: "From target screening to close",
  },
  {
    value: 20, prefix: "$", suffix: "M+",
    label: "Cost Savings",
    desc: "Delivered via optimization",
    detail: "Across a $165M cost base",
  },
  {
    value: 12, prefix: "", suffix: "+",
    label: "Years Experience",
    desc: "Strategic Finance & FP&A",
    detail: "SaaS, Pharma, Retail, FinServ",
  },
];

const highlights = [
  "Scaled FP&A from ~$80M to ~$110M ARR at Sauce Labs",
  "Reduced reporting cycle time by 60%+ through automation",
  "Improved forecast accuracy by up to 30% via Anaplan",
  "Delivered ~15% cost reduction through driver-based modeling",
  "$300M+ fundraising supported across equity & debt",
  "Built FP&A functions from ground up at multiple companies",
];

export function Stats() {
  return (
    <section id="stats" className="py-28 relative z-10 overflow-hidden" style={{ backgroundColor: NAVY }}>

      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-20"
          style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-20"
          style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>
            By The Numbers
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">Measurable Impact</h2>
          <div className="w-16 h-1 mx-auto mt-4" style={{ backgroundColor: GOLD }} />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-center rounded-2xl p-6 transition-all"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full" style={{ backgroundColor: GOLD }} />

              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 mt-2" style={{ color: GOLD }}>
                <Counter from={0} to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">{stat.label}</h3>
              <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.desc}</p>
              <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto rounded-2xl p-8"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3 className="text-lg font-serif font-bold text-white mb-6 text-center tracking-wide">
            Career Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3"
              >
                <span
                  className="mt-1.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${GOLD}22` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
