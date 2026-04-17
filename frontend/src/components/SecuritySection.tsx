import { motion } from "framer-motion";
import { Shield, Fingerprint, Lock, Eye } from "lucide-react";

const features = [
  { icon: Fingerprint, title: "Thumb Identity Verification", desc: "Biometric authentication ensures only you access your profile and body scans." },
  { icon: Shield, title: "End-to-End Encryption", desc: "All your photos and measurements are encrypted with military-grade AES-256." },
  { icon: Lock, title: "Private by Design", desc: "Your data is never shared with third parties. Auto-delete option available." },
  { icon: Eye, title: "No Unauthorized Access", desc: "Multi-factor authentication and session monitoring for complete peace of mind." },
];

const SecuritySection = () => (
  <section id="security" className="py-24 bg-secondary/20">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">Ultra Secure</p>
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          Your Safety, <span className="text-gradient-rose">Our Responsibility</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition hover:shadow-rose"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Icon size={28} className="text-primary" />
            </div>
            <h4 className="font-display text-lg font-semibold">{title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
