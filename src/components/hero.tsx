import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Calendar, Mail } from "lucide-react";
import profilePhoto from "@assets/IMG_0107_1775499768513.jpeg";
import { HERO, SITE } from "@/data/content";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-background"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(221,55%,24%,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[hsl(221,55%,24%,0.04)] to-transparent" />
        <div
          className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full opacity-50 blur-3xl"
          style={{ background: `radial-gradient(circle, hsl(43,74%,49%,0.10), transparent 70%)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-7"
            >
              <MapPin className="h-4 w-4" style={{ color: GOLD }} />
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                {SITE.location}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] mb-4 text-foreground"
            >
              {HERO.name.split(" ")[0]}{" "}
              <span style={{ color: NAVY }}>{HERO.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="w-16 h-1 mb-5 origin-left"
              style={{ backgroundColor: GOLD }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-xl md:text-2xl font-semibold mb-1.5 text-foreground"
            >
              {HERO.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-sm font-bold uppercase tracking-[0.18em] mb-7"
              style={{ color: GOLD }}
            >
              {HERO.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg"
            >
              {HERO.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-schedule-call"
                className="inline-flex items-center gap-2 rounded-lg text-sm font-bold text-white px-6 py-3 transition-opacity hover:opacity-90 shadow-md"
                style={{ backgroundColor: NAVY }}
              >
                <Calendar className="h-4 w-4" />
                Schedule a Call
              </a>
              <button
                onClick={scrollToContact}
                data-testid="button-contact"
                className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[hsl(221,55%,24%,0.05)]"
                style={{ borderColor: `${NAVY}35`, color: NAVY }}
              >
                <Mail className="h-4 w-4" />
                Contact
              </button>
              <a
                href={SITE.resumeUrl}
                onClick={(e) => { e.preventDefault(); scrollToContact(); }}
                data-testid="button-resume"
                className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold px-6 py-3 transition-colors"
                style={{ color: "hsl(220,10%,50%)" }}
              >
                <ArrowRight className="h-4 w-4" />
                Request Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Photo — clean, no floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Offset decorative border */}
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 z-0"
                style={{ borderColor: `${GOLD}45` }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl z-0"
                style={{ backgroundColor: `${NAVY}09` }}
              />

              {/* Photo frame */}
              <div className="relative w-72 h-[360px] md:w-80 md:h-[400px] lg:w-[360px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl z-10"
                style={{ boxShadow: `0 24px 64px hsl(221,55%,24%,0.18)` }}
              >
                <img
                  src={profilePhoto}
                  alt="Venu Vegi — Senior Finance Leader"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
                {/* Subtle bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-28"
                  style={{ background: `linear-gradient(to top, ${NAVY}55, transparent)` }}
                />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white text-[11px] font-semibold uppercase tracking-widest opacity-75">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
