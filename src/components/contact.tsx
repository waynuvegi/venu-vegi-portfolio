import { motion } from "framer-motion";
import { Calendar, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";

const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", _hp: "" });
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form._hp) return;

    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    const body = `Name: ${form.name}%0AFrom: ${form.email}%0A%0A${form.message}`;
    const subject = form.subject || `Portfolio Contact from ${form.name}`;
    window.location.href = `mailto:venu@venuvegi.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputBase =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-opacity-60 focus:ring-2";

  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: NAVY }}>
            Let's <span style={{ color: GOLD }}>Connect</span>
          </h2>
          <div className="w-16 h-1 mb-6" style={{ backgroundColor: GOLD }} />
          <p className="text-lg text-muted-foreground max-w-xl">
            Open to strategic finance leadership roles, corporate development opportunities, and consulting engagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: NAVY }}>Send a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <CheckCircle2 className="h-12 w-12 mb-4" style={{ color: GOLD }} />
                <p className="font-semibold text-foreground mb-1">Message ready to send</p>
                <p className="text-sm text-muted-foreground">Your email client should have opened with the message pre-filled.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-contact">

                {/* Honeypot — hidden from real users, bots fill it, we reject */}
                <input
                  type="text"
                  name="_hp"
                  value={form._hp}
                  onChange={handleChange}
                  aria-hidden="true"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      data-testid="input-name"
                      className={inputBase}
                      style={{ "--tw-ring-color": NAVY } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      data-testid="input-email"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Finance Leadership Opportunity"
                    data-testid="input-subject"
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or how I can help..."
                    data-testid="input-message"
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* reCAPTCHA */}
                <div>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(token) => {
                      setCaptchaToken(token);
                      setCaptchaError(false);
                    }}
                    onExpired={() => setCaptchaToken(null)}
                    data-testid="recaptcha"
                  />
                  {captchaError && (
                    <p className="mt-2 text-xs font-medium" style={{ color: "hsl(0, 70%, 50%)" }}>
                      Please complete the verification above before sending.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  data-testid="button-send"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg text-sm font-bold text-white h-12 px-6 transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: NAVY }}
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>

                {/* Security note */}
                <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0" style={{ color: GOLD }} />
                  Protected by reCAPTCHA — your information stays private.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right Column: Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div
              className="rounded-xl p-8 flex flex-col items-center justify-center text-center text-white flex-1"
              style={{ backgroundColor: NAVY }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Book a Meeting</h3>
              <p className="text-sm mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                Schedule a direct call to discuss leadership roles, consulting, or strategic finance opportunities.
              </p>
              <a
                href="https://calendly.com/venu_vegi"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-calendly"
                className="w-full inline-flex items-center justify-center rounded-lg text-sm font-bold h-12 px-6 transition-opacity hover:opacity-90"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                Schedule via Calendly
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
