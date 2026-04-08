import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Tuck the Saree", desc: "Start by tucking the plain end of the saree into the petticoat at the navel, going right to left." },
  { title: "Make Pleats", desc: "Create 5-7 neat pleats of about 5 inches width, ensuring they face left." },
  { title: "Tuck the Pleats", desc: "Tuck the pleated section slightly to the left of center." },
  { title: "Drape the Pallu", desc: "Take the remaining fabric (pallu) over your left shoulder, letting it fall gracefully at the back." },
  { title: "Pin & Adjust", desc: "Pin the pallu at the shoulder and adjust all pleats for a neat, elegant finish." },
];

const viewAngles = ["Front View", "Right Side", "Back View", "Left Side"];

const DrapingGuideSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeView, setActiveView] = useState(0);

  return (
    <section id="draping-guide" className="py-24 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">Step by Step</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Draping <span className="text-gradient-rose">Guide</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveStep(i)}
                className={`cursor-pointer rounded-2xl border p-5 transition ${activeStep === i ? "border-primary bg-primary/5 shadow-rose" : "border-border bg-card"}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition ${activeStep === i ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold">{step.title}</h4>
                    {activeStep === i && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-2 text-sm text-muted-foreground">
                        {step.desc}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex-1">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="flex justify-center gap-3 mb-6">
                {viewAngles.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setActiveView(i)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition ${activeView === i ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-secondary/50">
                <motion.div
                  key={`${activeStep}-${activeView}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-48 w-32 items-center justify-center rounded-2xl border-2 border-dashed border-primary/30">
                    <div className="text-center">
                      <p className="font-display text-4xl text-primary/30">👗</p>
                      <p className="mt-2 text-xs text-muted-foreground">{viewAngles[activeView]}</p>
                    </div>
                  </div>
                  <p className="font-display text-lg font-semibold">Step {activeStep + 1}: {steps[activeStep].title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{viewAngles[activeView]}</p>
                </motion.div>
              </div>

              <div className="mt-6 rounded-xl bg-secondary/50 p-4">
                <p className="text-xs font-medium text-muted-foreground">
                  📸 <strong>Supplier Note:</strong> Saree images must be wrinkle-free, taken in proper lighting. Border (if present) must be clearly captured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrapingGuideSection;
