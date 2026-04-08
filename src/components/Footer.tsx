import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-bold text-gradient-rose">Sareevia</h3>
          <p className="mt-2 text-sm text-muted-foreground">Virtual Saree Draping Application</p>
          <p className="mt-1 text-sm text-muted-foreground">Your Safety, Our Responsibility</p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Quick Links</h4>
          <div className="mt-3 space-y-2">
            {["AI Scanner", "360° View", "Catalog", "Draping Guide", "Security"].map((link) => (
              <p key={link} className="text-sm text-muted-foreground hover:text-primary transition cursor-pointer">{link}</p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">About</h4>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <p>Team: <strong className="text-foreground">TechSpark</strong></p>
            <p>Brand: <strong className="text-foreground">Sareevia</strong></p>
            <p>Event: <strong className="text-foreground">KBT Hackathon</strong></p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 border-t border-border pt-6 text-center"
      >
        <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          Made with <Heart size={14} className="fill-primary text-primary" /> by Team TechSpark — KBT Hackathon
        </p>
        <p className="mt-1 text-xs text-muted-foreground">© 2026 Sareevia. All rights reserved.</p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
