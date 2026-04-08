import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = (e: MouseEvent) => {
      setClicking(true);
      const id = Date.now();
      setParticles((p) => [...p.slice(-8), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setParticles((p) => p.filter((pp) => pp.id !== id)), 1000);
    };
    const up = () => setClicking(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <motion.div
        className="absolute rounded-full bg-primary"
        style={{ width: 8, height: 8, translateX: "-50%", translateY: "-50%" }}
        animate={{ x: pos.x, y: pos.y, scale: clicking ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="absolute rounded-full border-2 border-primary/50"
        style={{ width: 36, height: 36, translateX: "-50%", translateY: "-50%" }}
        animate={{ x: pos.x, y: pos.y, scale: clicking ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {particles.map((p) => (
        <div key={p.id} className="absolute" style={{ left: p.x, top: p.y }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-primary"
              initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              animate={{
                opacity: 0,
                scale: 0,
                x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                y: Math.sin((i * 60 * Math.PI) / 180) * 30,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CustomCursor;
