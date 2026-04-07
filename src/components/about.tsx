import { motion } from "framer-motion";
import { TrendingUp, DollarSign, BarChart3, Users } from "lucide-react";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";

const coreSkills = [
  "FP&A Leadership", "Strategic Finance", "AOP / LRP", "SaaS Metrics (ARR, CAC, LTV, NRR)",
  "Revenue & GTM Planning", "Cost Structure Management", "Working Capital & Cash Flow",
  "AR / AP", "Capital Allocation", "M&A & Fundraising", "Financial Modeling",
  "NetSuite", "Anaplan", "Executive Business Partnering",
];

const pillars = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    label: "Scale Range",
    value: "$100M → $700M ARR",
    sub: "Businesses supported",
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    label: "Fundraising",
    value: "$300M+",
    sub: "Capital raised",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    label: "Cost Optimization",
    value: "$20M+",
    sub: "Savings delivered",
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: "M&A Transactions",
    value: "8+",
    sub: "Deals led",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-[40px]" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>About</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6" style={{ color: NAVY }}>
              Finance Leader &<br />Strategic Partner
            </h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Finance leader with 12+ years of experience owning FP&A and strategic finance, known for driving business performance across high-growth SaaS and large-scale enterprise environments.
              </p>
              <p>
                I operate across the full financial scope of a business — spanning revenue and GTM strategy, cost structure (COS, S&M, R&D, G&A), working capital, cash flow, and capital allocation.
              </p>
              <p>
                My experience includes supporting businesses from <strong className="text-foreground font-semibold">~$100M to ~$700M ARR</strong> and operating within <strong className="text-foreground font-semibold">$1B+ environments</strong>, with a track record of driving $300M+ in fundraising, leading 8+ M&A transactions, and delivering $20M+ in cost optimization to improve growth, margin, and financial discipline.
              </p>
            </div>

            {/* Pillar metrics */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${NAVY}0f`, color: NAVY }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium mb-0.5">{p.label}</p>
                    <p className="text-lg font-serif font-bold leading-none" style={{ color: NAVY }}>{p.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-[40px]" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>Core Skills</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-8" style={{ color: NAVY }}>What I Bring</h3>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {coreSkills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="px-4 py-2 text-sm font-medium rounded-full border transition-colors"
                  style={{
                    borderColor: `${NAVY}25`,
                    color: NAVY,
                    backgroundColor: `${NAVY}06`,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Industry coverage */}
            <div
              className="rounded-xl p-6 border"
              style={{ backgroundColor: `${GOLD}08`, borderColor: `${GOLD}30` }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: GOLD }}>
                Industry Experience
              </p>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                {[
                  "SaaS / Software",
                  "Pharmaceuticals",
                  "Retail / E-Commerce",
                  "Financial Services",
                  "Payments",
                  "Alcoholic Beverages",
                ].map((industry) => (
                  <div key={industry} className="flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
                    <span className="text-sm font-medium text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
