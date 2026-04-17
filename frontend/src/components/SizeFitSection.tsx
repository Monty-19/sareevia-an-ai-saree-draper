import { useState } from "react";
import { motion } from "framer-motion";
import { Ruler, User, Weight, ArrowUpDown } from "lucide-react";

const SizeFitSection = () => {
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(55);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">Personalized</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Perfect <span className="text-gradient-rose">Fit</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            For those who prefer not to upload their photo — enter your measurements for perfect recommendations
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-soft">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-medium">
                <ArrowUpDown size={16} className="text-primary" /> Height (cm)
              </label>
              <input
                type="range"
                min={140}
                max={190}
                value={height}
                onChange={(e) => setHeight(+e.target.value)}
                className="w-full accent-primary"
              />
              <p className="mt-1 text-center font-display text-2xl font-bold">{height} cm</p>
            </div>
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-medium">
                <Weight size={16} className="text-primary" /> Weight (kg)
              </label>
              <input
                type="range"
                min={35}
                max={120}
                value={weight}
                onChange={(e) => setWeight(+e.target.value)}
                className="w-full accent-primary"
              />
              <p className="mt-1 text-center font-display text-2xl font-bold">{weight} kg</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Ruler, label: "Body Posture", value: "Athletic" },
              { icon: User, label: "Size", value: height > 165 ? "L" : "M" },
              { icon: Weight, label: "BMI", value: (weight / ((height / 100) ** 2)).toFixed(1) },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl bg-secondary p-4 text-center">
                <Icon size={20} className="mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="font-display text-lg font-bold">{value}</p>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 w-full rounded-full bg-primary py-3.5 font-body text-sm font-semibold text-primary-foreground shadow-rose"
          >
            Get Personalized Recommendations
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SizeFitSection;
