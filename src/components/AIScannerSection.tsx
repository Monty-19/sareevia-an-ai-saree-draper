import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanLine, Sparkles } from "lucide-react";
import aiScanner from "@/assets/ai-scanner.jpg";
import sareeBanarasi from "@/assets/saree-banarasi.jpg";
import sareeKanjeevaram from "@/assets/saree-kanjeevaram.jpg";
import sareeChiffon from "@/assets/saree-chiffon.jpg";

const suggestions = [
  { name: "Banarasi Silk", img: sareeBanarasi, match: "98%" },
  { name: "Kanjeevaram", img: sareeKanjeevaram, match: "95%" },
  { name: "Chiffon Rose", img: sareeChiffon, match: "92%" },
];

const AIScannerSection = () => {
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);

  const startScan = () => {
    setDone(false);
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setDone(true);
    }, 3000);
  };

  return (
    <section id="ai-scanner" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">AI-Powered</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Smart Body <span className="text-gradient-rose">Scanner</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Our AI scans your body measurements and suggests perfect sarees tailored to your body type
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex-1"
          >
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl">
              <img src={aiScanner} alt="AI body scanning" loading="lazy" width={1024} height={1024} className="w-full" />
              {scanning && (
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-primary shadow-glow animate-scan"
                  initial={{ top: "0%" }}
                />
              )}
              {scanning && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="h-32 w-32 rounded-full border-2 border-dashed border-primary/60"
                  />
                </div>
              )}
            </div>
            <div className="mt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startScan}
                disabled={scanning}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground shadow-rose disabled:opacity-50"
              >
                <ScanLine size={18} />
                {scanning ? "Scanning..." : "Start AI Scan"}
              </motion.button>
            </div>
          </motion.div>

          <div className="flex-1">
            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles size={20} />
                    <p className="font-display text-lg font-semibold">Perfect Matches Found!</p>
                  </div>
                  {suggestions.map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:shadow-rose"
                    >
                      <img src={s.img} alt={s.name} className="h-20 w-16 rounded-xl object-cover" loading="lazy" />
                      <div className="flex-1">
                        <p className="font-display text-lg font-semibold">{s.name}</p>
                        <p className="text-sm text-muted-foreground">Recommended for your body type</p>
                      </div>
                      <div className="rounded-full bg-secondary px-3 py-1 text-sm font-bold text-primary">
                        {s.match}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {!done && !scanning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center lg:text-left"
              >
                <h3 className="font-display text-2xl font-bold">How It Works</h3>
                <div className="mt-6 space-y-4">
                  {["Stand in front of your camera", "AI creates your 3D body mesh", "Get personalized saree suggestions"].map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {i + 1}
                      </div>
                      <p className="pt-1 text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIScannerSection;
