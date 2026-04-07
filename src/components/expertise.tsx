import { motion } from "framer-motion";
import { BarChart3, Briefcase, Calculator, LineChart, Network, PieChart } from "lucide-react";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";

const expertiseAreas = [
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Financial Planning & Analysis",
    desc: "AOP, LRP, rolling forecasts, and company-wide budgeting tied to business strategy.",
    skills: ["Corporate Budgeting & AOP", "Rolling Forecasts / LRP", "Variance & Scenario Analysis", "Workforce Planning"],
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Strategic Finance & Growth",
    desc: "From GTM planning to capital allocation — partnering with leadership to drive decisions.",
    skills: ["Revenue & GTM Strategy", "Capital Allocation", "Operating Model Design", "Executive Business Partnering"],
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Corporate Development",
    desc: "M&A transaction management from target screening through due diligence and close.",
    skills: ["Mergers & Acquisitions (M&A)", "DCF & Valuation Modeling", "Due Diligence", "Fundraising ($300M+)"],
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data & Business Intelligence",
    desc: "Turning financial data into actionable insight with modern BI tools and automation.",
    skills: ["KPI Dashboards (Looker, Tableau)", "Process Automation (60% faster)", "Anaplan & NetSuite", "SQL & Python"],
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Full Financial Oversight",
    desc: "End-to-end ownership of income statement, balance sheet, and cash flow planning.",
    skills: ["P&L / Cost Structure (COS, S&M, R&D, G&A)", "Working Capital & Cash Flow", "AR / AP Management", "Month-end Close"],
  },
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "SaaS & Industry KPIs",
    desc: "Deep fluency in the metrics that drive SaaS, e-commerce, and enterprise businesses.",
    skills: ["ARR, MRR, CAC, LTV, Churn, NRR", "E-Comm: Conversion, Fulfillment", "EBITDA, Cash Flow, Net Income", "$100M → $700M ARR Experience"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: NAVY }}>
            Core <span style={{ color: GOLD }}>Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Deep domain knowledge across SaaS, Pharmaceuticals, Retail, and Financial Services — driving strategy through rigorous financial modeling and operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              data-testid={`card-expertise-${index}`}
              className="bg-card border border-border rounded-xl p-7 hover:shadow-lg transition-all duration-200 group relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-200"
                style={{ backgroundColor: index % 2 === 0 ? NAVY : GOLD }}
              />

              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl mb-5 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: `${NAVY}10`, color: NAVY }}
              >
                {area.icon}
              </div>

              <h3 className="text-[15px] font-bold mb-2 leading-snug" style={{ color: NAVY }}>{area.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{area.desc}</p>

              <ul className="space-y-2">
                {area.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
