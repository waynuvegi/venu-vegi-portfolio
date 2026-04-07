import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EXPERIENCES } from "@/data/content";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";
const GOLD_TEXT = "hsl(35, 60%, 30%)";
const PREVIEW_COUNT = 3;

function ExperienceCard({ exp, index }: { exp: (typeof EXPERIENCES)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const preview = exp.bullets.slice(0, PREVIEW_COUNT);
  const rest = exp.bullets.slice(PREVIEW_COUNT);
  const hasMore = rest.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      data-testid={`card-experience-${index}`}
      className="relative"
    >
      <div className="md:grid md:grid-cols-[140px_1fr] md:gap-10 items-start">

        {/* Date column */}
        <div className="hidden md:flex flex-col items-end pt-5 pr-2 gap-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-right leading-relaxed" style={{ color: GOLD }}>
            {exp.period}
          </span>
        </div>

        {/* Card content */}
        <div className="relative pl-8 md:pl-10">
          {/* Timeline dot with gold center */}
          <div className="absolute left-[-7px] top-[22px] w-3.5 h-3.5 rounded-full ring-[3px] ring-white z-10" style={{ backgroundColor: NAVY }} />
          <div className="absolute left-[-3.5px] top-[26px] w-2 h-2 rounded-full z-20" style={{ backgroundColor: GOLD }} />

          {/* Mobile date */}
          <div className="md:hidden text-[11px] font-bold uppercase tracking-wider mb-2.5" style={{ color: GOLD }}>
            {exp.period}
          </div>

          <div className="bg-white border border-border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            style={{ borderLeft: `4px solid ${NAVY}` }}
          >
            {/* Card header */}
            <div className="px-6 pt-6 pb-4" style={{ borderBottom: `1px solid hsl(220,15%,92%)` }}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold leading-snug mb-2" style={{ color: NAVY }}>
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-sm font-bold text-foreground">{exp.company}</span>
                    <span className="text-border">·</span>
                    <span className="text-xs text-muted-foreground">{exp.location}</span>
                  </div>
                </div>

                {/* Industry badge — gold tint, high contrast */}
                <span
                  className="self-start inline-flex shrink-0 items-center px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-widest border whitespace-nowrap"
                  style={{
                    backgroundColor: `${GOLD}18`,
                    color: GOLD_TEXT,
                    borderColor: `${GOLD}40`,
                  }}
                >
                  {exp.industry}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <div className="px-6 py-5">
              <ul className="space-y-3.5">
                {preview.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold" style={{ color: "hsl(220, 20%, 22%)" }}>{item.subtitle}:</span>
                      {" "}{item.body}
                    </span>
                  </li>
                ))}

                {expanded && rest.map((item, i) => (
                  <motion.li
                    key={`r-${i}`}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: i * 0.04 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold" style={{ color: "hsl(220, 20%, 22%)" }}>{item.subtitle}:</span>
                      {" "}{item.body}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {hasMore && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-all hover:opacity-70 group"
                  style={{ color: NAVY }}
                  data-testid={`toggle-experience-${index}`}
                >
                  {expanded ? (
                    <><ChevronUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" /> Show Less</>
                  ) : (
                    <><ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" /> View {rest.length} More</>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-28 relative" style={{ backgroundColor: "hsl(210, 22%, 97%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD}60, transparent)` }}
      />

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
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Career History</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: NAVY }}>
            Career <span style={{ color: GOLD }}>Trajectory</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            12+ years across SaaS, Pharma, Retail, and Financial Services — from early-stage startups to $1B+ enterprise environments.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline spine */}
          <div
            className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px"
            style={{ background: `linear-gradient(to bottom, ${GOLD}80, ${NAVY}30, transparent)` }}
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>

          {/* Additional experience pill */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 pl-8 md:pl-10 md:ml-[140px]"
          >
            <div
              className="inline-flex flex-wrap items-center gap-x-4 gap-y-1.5 px-5 py-3.5 rounded-xl bg-white shadow-sm"
              style={{ border: `1px solid hsl(221, 55%, 24%, 0.25)` }}
            >
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: NAVY }}>
                Additional Experience
              </span>
              <span className="hidden sm:block text-xs" style={{ color: "hsl(221, 55%, 24%, 0.35)" }}>·</span>
              <span className="text-xs font-medium" style={{ color: "hsl(221, 20%, 40%)" }}>
                Lending Club · Ellie Mae · One To One Learning · Golden Gate University
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
