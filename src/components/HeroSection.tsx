import { motion } from "framer-motion";
import heroModel from "@/assets/hero-model.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen overflow-hidden bg-hero-gradient">
    <div className="absolute inset-0 opacity-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-primary/40"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
    </div>

    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 pt-20 lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center lg:text-left"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary"
        >
          Virtual Saree Draping Experience
        </motion.p>

        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Drape Your
          <br />
          <span className="text-gradient-rose">Dreams</span>
          <br />
          Virtually
        </h1>

        <p className="mt-6 max-w-lg font-body text-lg text-muted-foreground">
          Experience India's rich saree heritage through cutting-edge AI technology.
          Try on thousands of sarees from the comfort of your home.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-primary px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground shadow-rose transition"
          >
            Try Now — It's Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-primary/30 px-8 py-3.5 font-body text-sm font-semibold text-foreground transition hover:border-primary"
          >
            Watch Demo
          </motion.button>
        </div>

        <p className="mt-6 font-body text-xs italic text-muted-foreground">
          "Your Safety, Our Responsibility" — 🔒 Thumb Identity Verified
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex-1"
      >
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" />
          <img
            src={heroModel}
            alt="Beautiful Indian woman in traditional saree"
            width={1024}
            height={1280}
            className="relative rounded-3xl shadow-rose"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-4 top-1/4 rounded-2xl bg-card/90 p-4 shadow-soft backdrop-blur"
          >
            <p className="font-display text-2xl font-bold text-gradient-rose">500+</p>
            <p className="text-xs text-muted-foreground">Saree Varieties</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 bottom-1/4 rounded-2xl bg-card/90 p-4 shadow-soft backdrop-blur"
          >
            <p className="font-display text-2xl font-bold text-gradient-gold">AI</p>
            <p className="text-xs text-muted-foreground">Powered Draping</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
