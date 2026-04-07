import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Waves, BarChart3 } from "lucide-react";
import { COVERAGE_AREAS } from "@/data/content";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";

const config = [
  { icon: <TrendingUp className="h-6 w-6" />, color: NAVY, iconBg: "hsl(221, 55%, 24%, 0.10)", dotColor: NAVY },
  { icon: <DollarSign className="h-6 w-6" />, color: GOLD, iconBg: "hsl(43, 74%, 49%, 0.12)", dotColor: GOLD },
  { icon: <Waves className="h-6 w-6" />, color: NAVY, iconBg: "hsl(221, 55%, 24%, 0.10)", dotColor: NAVY },
  { icon: <BarChart3 className="h-6 w-6" />, color: GOLD, iconBg: "hsl(43, 74%, 49%, 0.12)", dotColor: GOLD },
];

export function WhatICover() {
  return (
    <section id="coverage" className="py-28 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Scope of Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5" style={{ color: NAVY }}>
            What I Cover Across<br className="hidden sm:block" /> a Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I own the full financial architecture — not just one function. Here's how I operate across all four pillars of a business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COVERAGE_AREAS.map((area, i) => {
            const { icon, color, iconBg, dotColor } = config[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                data-testid={`card-coverage-${i}`}
                className="relative bg-card border border-border rounded-2xl p-7 group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ backgroundColor: color }} />

                {/* Background number watermark */}
                <div
                  className="absolute bottom-3 right-4 text-8xl font-serif font-bold select-none pointer-events-none"
                  style={{ color: "hsl(221, 55%, 24%, 0.05)" }}
                >
                  {i + 1}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: iconBg, color }}
                >
                  {icon}
                </div>

                <h3 className="text-base font-bold mb-4 leading-snug" style={{ color: NAVY }}>{area.title}</h3>

                <ul className="space-y-2.5 flex-1">
                  {area.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dotColor }} />
                      <span className="text-[13px] text-muted-foreground leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
