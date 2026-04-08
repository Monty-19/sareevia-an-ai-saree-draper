import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, ImageIcon } from "lucide-react";
import view360 from "@/assets/360-view.jpg";

const backgrounds = [
  { name: "Studio", color: "bg-rose-soft" },
  { name: "Wedding", color: "bg-gradient-to-b from-amber-50 to-rose-100" },
  { name: "Office", color: "bg-gradient-to-b from-slate-100 to-slate-200" },
  { name: "Function", color: "bg-gradient-to-b from-pink-50 to-purple-100" },
  { name: "India Map", color: "bg-gradient-to-b from-orange-50 to-green-50" },
];

const views = ["Front", "Right", "Back", "Left"];

const View360Section = () => {
  const [bg, setBg] = useState(0);
  const [viewIdx, setViewIdx] = useState(0);
  const [rotation, setRotation] = useState(0);

  return (
    <section id="360°-view" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">Interactive</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            360° <span className="text-gradient-rose">View</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Rotate the model, change backgrounds, and switch saree patterns — all in real-time
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex-1"
          >
            <div className={`relative mx-auto max-w-md overflow-hidden rounded-3xl ${backgrounds[bg].color} p-8 transition-colors duration-500`}>
              <motion.img
                src={view360}
                alt="360 degree saree view"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-2xl"
                animate={{ rotateY: rotation }}
                transition={{ type: "spring", stiffness: 100 }}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex gap-2 rounded-full bg-card/80 p-2 backdrop-blur">
                  {views.map((v, i) => (
                    <button
                      key={v}
                      onClick={() => { setViewIdx(i); setRotation(i * 90); }}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition ${viewIdx === i ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 space-y-8">
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
                <ImageIcon size={20} className="text-primary" /> Change Background
              </h3>
              <div className="flex flex-wrap gap-3">
                {backgrounds.map((b, i) => (
                  <motion.button
                    key={b.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setBg(i)}
                    className={`rounded-xl border-2 px-4 py-2 text-sm font-medium transition ${bg === i ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
                  >
                    {b.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
                <RotateCcw size={20} className="text-primary" /> Saree Segments
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Pallu Section", "Top Half", "Bottom Half", "Blouse", "Border", "Body Pattern"].map((seg) => (
                  <div key={seg} className="rounded-xl border border-border bg-card p-3 text-center text-sm font-medium shadow-soft">
                    {seg}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h4 className="font-display text-lg font-semibold">3D Mesh Rendering</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Our advanced 3D mesh technology maps every fold and drape of the saree onto your body with pixel-perfect accuracy. The border, pallu, and pleats are all individually rendered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default View360Section;
