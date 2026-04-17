import { motion } from "framer-motion";
import sareeBanarasi from "@/assets/saree-banarasi.jpg";
import sareeKanjeevaram from "@/assets/saree-kanjeevaram.jpg";
import sareeChiffon from "@/assets/saree-chiffon.jpg";
import sareePaithani from "@/assets/saree-paithani.jpg";
import sareeChanderi from "@/assets/saree-chanderi.jpg";
import sareeSambalpuri from "@/assets/saree-sambalpuri.jpg";

const sarees = [
  { name: "Banarasi", origin: "Varanasi, UP", history: "Dating back to the Mughal era, known for gold & silver brocade work.", draping: "Nivi style with elaborate pallu display", img: sareeBanarasi },
  { name: "Kanjeevaram", origin: "Kanchipuram, TN", history: "Temple sarees woven with mulberry silk threads, 400+ years of tradition.", draping: "Classic South Indian pinkosu drape", img: sareeKanjeevaram },
  { name: "Chiffon", origin: "Pan-India", history: "Modern lightweight fabric loved for its sheer elegance and flow.", draping: "Free-flowing seedha pallu style", img: sareeChiffon },
  { name: "Paithani", origin: "Paithan, Maharashtra", history: "2000-year-old tradition with peacock & lotus motifs on silk.", draping: "Maharashtrian nauvari or standard drape", img: sareePaithani },
  { name: "Chanderi", origin: "Chanderi, MP", history: "Sheer fabric with zari borders, patronized by Mughal royalty.", draping: "Bengali or Nivi style", img: sareeChanderi },
  { name: "Sambalpuri", origin: "Odisha", history: "Ikat tie-dye technique creating intricate bandha patterns.", draping: "Traditional Odia drape with seedha pallu", img: sareeSambalpuri },
];

const SareeTypesSection = () => (
  <section id="catalog" className="py-24">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">Heritage Collection</p>
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          Sarees of <span className="text-gradient-rose">India</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Each saree pattern carries its own history and draping traditions
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sarees.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-rose"
          >
            <div className="relative h-72 overflow-hidden">
              <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-display text-2xl font-bold text-primary-foreground">{s.name}</p>
                <p className="text-sm text-primary-foreground/80">{s.origin}</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-muted-foreground">{s.history}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {s.draping}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SareeTypesSection;
