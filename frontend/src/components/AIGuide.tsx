import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const defaultResponses: Record<string, string> = {
  "hello": "Namaste! 🙏 Welcome to Sareevia. How can I help you today?",
  "hi": "Hi there! 🌸 I'm your Sareevia AI Guide. Ask me anything about sarees, draping, or using the app!",
  "scan": "To use our AI Scanner, go to the AI Scanner section and click 'Start AI Scan'. Stand in front of your camera and our AI will create a 3D mesh of your body to suggest perfect sarees!",
  "drape": "Check out our Draping Guide section! We have step-by-step instructions with Front, Right, Back, and Left views for each step.",
  "security": "Your safety is our responsibility! We use thumb identity verification, end-to-end encryption, and multi-factor authentication. Your data is never shared.",
  "language": "We support English, Hindi, Marathi, Tamil, Gujarati, Bengali, and Punjabi. Use the language selector in the top navigation.",
  "saree": "We have 500+ varieties including Banarasi, Kanjeevaram, Chiffon, Paithani, Chanderi, Sambalpuri, and many more! Each carries its own rich history.",
  "360": "Our 360° View lets you rotate the model, change backgrounds (Wedding, Office, Function, etc.), and switch saree patterns in real-time!",
  "size": "If you prefer not to upload your photo, use our Size & Fit feature — enter your height, weight, and body posture to get personalized recommendations.",
};

const getResponse = (msg: string): string => {
  const lower = msg.toLowerCase();
  for (const [key, val] of Object.entries(defaultResponses)) {
    if (lower.includes(key)) return val;
  }
  return "Thank you for your question! Our AI guide can help with: scanning, draping, security, saree types, 360° view, size fitting, and language options. Try asking about any of these! 🌸";
};

const AIGuide = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Namaste! 🙏 I'm your Sareevia AI Guide. Ask me anything about virtual saree draping!" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getResponse(userMsg) }]);
    }, 600);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-rose"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 flex h-[420px] w-[340px] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-rose"
          >
            <div className="bg-primary p-4">
              <p className="font-display text-lg font-bold text-primary-foreground">Sareevia AI Guide</p>
              <p className="text-xs text-primary-foreground/80">Ask me anything!</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="border-t border-border p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={send}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIGuide;
