import { motion } from "framer-motion";
import { GraduationCap, Award, Cpu, BarChart2, Code, Wrench } from "lucide-react";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";
const NAVY_A10 = "hsl(221, 55%, 24%, 0.10)";
const NAVY_A20 = "hsl(221, 55%, 24%, 0.20)";
const GOLD_A10 = "hsl(43, 74%, 49%, 0.10)";
const GOLD_A30 = "hsl(43, 74%, 49%, 0.30)";
const GOLD_TEXT = "hsl(35, 60%, 30%)";

const degrees = [
  {
    badge: "Graduate",
    title: "Master of Science in Finance",
    institution: "Golden Gate University",
    location: "San Francisco, CA",
    detail: "GPA 3.32 · President, Indian Student Association · Investment Club Member",
    accentColor: NAVY,
  },
  {
    badge: "Undergraduate",
    title: "Bachelor of Science in Mechanical Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "India",
    detail: "GPA 4.0 · 2nd Rank — ABVP Award · Published International Research Paper",
    accentColor: NAVY,
  },
];

const certification = {
  badge: "Certification",
  title: "Investment Banking Job Simulation",
  institution: "JPMorgan Chase — Forage",
  period: "August 2025",
  detail: "DCF valuation modeling, M&A target identification, and 2-pager deal summary",
};

const technicalSkills = [
  {
    label: "Enterprise Platforms",
    icon: <Cpu className="h-4 w-4" />,
    items: ["NetSuite", "Anaplan", "SAP", "Hyperion", "Oracle EPM", "IBM TM1", "Salesforce", "Google Suite"],
  },
  {
    label: "Data & BI",
    icon: <BarChart2 className="h-4 w-4" />,
    items: ["Tableau", "Looker", "Power BI", "SQL", "Advanced Excel", "Google Sheets"],
  },
  {
    label: "Programming & Scripting",
    icon: <Code className="h-4 w-4" />,
    items: ["Python", "SQL", "VBA Macros", "HTML / CSS"],
  },
  {
    label: "Additional Tools",
    icon: <Wrench className="h-4 w-4" />,
    items: ["PowerPoint", "Google Slides", "JIRA", "Adobe Lightroom", "Google Cloud Platform"],
  },
];

export function Education() {
  return (
    <section id="education" className="py-28 relative" style={{ backgroundColor: "hsl(210, 22%, 97%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent 5%, ${GOLD} 50%, transparent 95%)`, opacity: 0.4 }}
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
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: NAVY }}>
            Education &{" "}
            <span style={{ color: GOLD }}>Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Degrees + Certification */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] flex items-center gap-2.5 mb-6" style={{ color: NAVY }}>
              <GraduationCap className="h-5 w-5" style={{ color: GOLD }} />
              Academic Background
            </h3>

            {degrees.map((deg, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`card-education-${i}`}
                style={{ borderLeft: `4px solid ${deg.accentColor}` }}
              >
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-md mb-4"
                  style={{ backgroundColor: GOLD_A10, color: GOLD_TEXT, border: `1px solid ${GOLD_A30}` }}
                >
                  {deg.badge}
                </span>
                <h4 className="text-base font-bold mb-1.5 text-foreground">{deg.title}</h4>
                <p className="text-sm font-semibold mb-3" style={{ color: NAVY }}>
                  {deg.institution}
                  <span className="font-normal text-muted-foreground"> · {deg.location}</span>
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{deg.detail}</p>
              </div>
            ))}

            {/* Certification */}
            <div
              className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              data-testid="card-certification"
              style={{ borderLeft: `4px solid ${GOLD}` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-4 w-4" style={{ color: GOLD }} />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-md"
                  style={{ backgroundColor: GOLD_A10, color: GOLD_TEXT, border: `1px solid ${GOLD_A30}` }}
                >
                  {certification.badge}
                </span>
              </div>
              <h4 className="text-base font-bold mb-1.5 text-foreground">{certification.title}</h4>
              <p className="text-sm font-semibold mb-3" style={{ color: NAVY }}>
                {certification.institution}
                <span className="font-normal text-muted-foreground"> · {certification.period}</span>
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">{certification.detail}</p>
            </div>
          </motion.div>

          {/* Right: Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] flex items-center gap-2.5 mb-6" style={{ color: NAVY }}>
              <Cpu className="h-5 w-5" style={{ color: GOLD }} />
              Technical Proficiency
            </h3>

            <div className="space-y-7">
              {technicalSkills.map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                  data-testid={`skills-group-${i}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span style={{ color: NAVY }}>{group.icon}</span>
                    <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">{group.label}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg transition-all hover:shadow-sm"
                        style={{
                          backgroundColor: "white",
                          border: `1px solid ${NAVY_A20}`,
                          color: NAVY,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Depth note */}
            <div
              className="mt-8 rounded-xl px-5 py-4 border text-xs text-muted-foreground leading-relaxed"
              style={{ backgroundColor: GOLD_A10, borderColor: GOLD_A30 }}
            >
              <span className="font-semibold" style={{ color: NAVY }}>Finance systems depth:</span>{" "}
              Hands-on implementation experience with Anaplan and NetSuite — led both deployments end-to-end at Sauce Labs, improving forecast accuracy by 30% and reducing reporting cycle time by 60%.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
