import { motion } from "framer-motion";
import { HOW_I_THINK } from "@/data/content";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";

export function HowIThink() {
  return (
    <section id="how-i-think" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent 5%, ${GOLD} 50%, transparent 95%)`, opacity: 0.4 }}
      />

      {/* Faint background mark */}
      <div
        className="absolute -right-24 top-12 text-[22rem] font-serif font-bold select-none pointer-events-none leading-none hidden lg:block"
        style={{ color: "hsl(221, 55%, 24%, 0.03)" }}
      >
        FP&A
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              Operating Philosophy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2" style={{ color: NAVY }}>
            How I <span style={{ color: GOLD }}>Think & Operate</span>
          </h2>
        </motion.div>

        {/* Featured statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mb-14 max-w-4xl"
        >
          <div
            className="rounded-2xl px-8 py-7 relative overflow-hidden"
            style={{ backgroundColor: NAVY }}
          >
            {/* Gold left border */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl" style={{ backgroundColor: GOLD }} />
            <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: GOLD }}>
              {HOW_I_THINK.tagline}
            </p>
            <p className="text-lg md:text-xl font-serif leading-relaxed text-white">
              {HOW_I_THINK.statement}
            </p>
          </div>
        </motion.div>

        {/* Principles grid — 2 × 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
          {HOW_I_THINK.principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.09 }}
              data-testid={`card-philosophy-${i}`}
              className="relative bg-card border border-border rounded-2xl p-7 hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Top gold accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ backgroundColor: GOLD }} />

              {/* Number */}
              <div
                className="text-xs font-bold uppercase tracking-[0.22em] mb-4 block"
                style={{ color: GOLD }}
              >
                {p.index}
              </div>

              {/* Watermark number */}
              <div
                className="absolute -bottom-4 -right-3 text-8xl font-serif font-bold select-none pointer-events-none leading-none"
                style={{ color: "hsl(221, 55%, 24%, 0.04)" }}
              >
                {p.index}
              </div>

              <h3 className="text-lg font-serif font-bold mb-4 leading-snug" style={{ color: NAVY }}>
                {p.headline}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-5xl"
        >
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl px-7 py-5 border"
            style={{
              backgroundColor: "hsl(43, 74%, 49%, 0.06)",
              borderColor: "hsl(43, 74%, 49%, 0.25)",
            }}
          >
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>
                Looking for a finance leader who can get things done?
              </p>
              <p className="text-xs text-muted-foreground">
                I partner with founders, CFOs, and operators to build financial clarity and drive execution — from AOP to M&A to daily operating cadences.
              </p>
            </div>
            <a
              href="https://calendly.com/venu_vegi"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center rounded-lg text-sm font-bold text-white px-6 py-3 transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: NAVY }}
            >
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
