import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

const languages = ["English", "हिन्दी", "मराठी", "தமிழ்", "ગુજરાતી", "বাংলা", "ਪੰਜਾਬੀ"];

const navLinks = ["Home", "AI Scanner", "360° View", "Catalog", "Draping Guide", "Security", "Feedback"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/[°\s]/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.div whileHover={{ scale: 1.05 }} className="font-display text-2xl font-bold text-gradient-rose">
          Sareevia
        </motion.div>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-body text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/70 transition hover:border-primary">
              <Globe size={14} />
              {selectedLang}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 rounded-xl border border-border bg-card p-2 shadow-soft"
                >
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setSelectedLang(l); setLangOpen(false); }}
                      className="block w-full rounded-lg px-4 py-2 text-left text-sm hover:bg-secondary"
                    >
                      {l}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full px-6 py-3 text-left text-sm hover:bg-secondary"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
