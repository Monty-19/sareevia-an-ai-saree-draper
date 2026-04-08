import { motion } from "framer-motion";
import ancientIndia from "@/assets/ancient-india.jpg";

const AncientIndiaSection = () => (
  <section className="relative overflow-hidden py-24">
    <div className="absolute inset-0">
      <img src={ancientIndia} alt="Ancient Indian saree heritage" loading="lazy" width={1920} height={768} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>
    <div className="relative mx-auto max-w-4xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-rose-glow">Heritage</p>
        <h2 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          5000 Years of Saree Culture
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
          From the Indus Valley Civilization to modern runways, the saree has been the pride of Indian textile heritage.
          Each region, each weave tells a story of artisans, traditions, and timeless beauty.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { num: "28+", label: "States" },
            { num: "100+", label: "Weaving Styles" },
            { num: "5000+", label: "Years of History" },
            { num: "1M+", label: "Weavers" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-rose-glow">{stat.num}</p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AncientIndiaSection;
