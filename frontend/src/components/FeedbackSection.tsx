import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageCircle, CheckCircle2, Zap, Check } from "lucide-react";

const reviews = [
  { name: "Priya S.", rating: 5, text: "Amazing! The AI scan was so accurate. Found the perfect Banarasi for my wedding!", avatar: "PS" },
  { name: "Ananya R.", rating: 5, text: "The 360° view feature is incredible. I could see exactly how the saree would look on me.", avatar: "AR" },
  { name: "Meera K.", rating: 4, text: "Love the background change feature! Tried my saree in different settings. Very helpful.", avatar: "MK" },
  { name: "Deepika M.", rating: 5, text: "The security features give me confidence to use this app. Very fast service too!", avatar: "DM" },
];

const resolvedIssues = [
  "Fixed image upload quality on low-bandwidth connections",
  "Improved 3D mesh rendering speed by 40%",
  "Enhanced color accuracy for silk sarees",
  "Added support for 7 Indian languages",
];

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!feedback.trim()) return;
    setSubmitted(true);
    setFeedback("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="feedback" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">Reviews</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            What Our <span className="text-gradient-rose">Customers</span> Say
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} size={12} className="fill-gold-warm text-gold-warm" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{r.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
              <CheckCircle2 className="text-primary" /> Recently Solved Issues
            </h3>
            <div className="space-y-3">
              {resolvedIssues.map((issue) => (
                <div key={issue} className="flex items-start gap-3 rounded-xl bg-secondary/50 p-3">
                  <Zap size={16} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">{issue}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
              <MessageCircle className="text-primary" /> Share Your Feedback
            </h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500"
                  >
                    <Check size={40} className="text-white" />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 font-display text-xl font-semibold text-green-600"
                  >
                    Submitted Successfully!
                  </motion.p>
                  <p className="mt-1 text-sm text-muted-foreground">Thank you for your feedback</p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us about your experience..."
                    rows={5}
                    className="w-full rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-primary"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubmit}
                    disabled={!feedback.trim()}
                    className="mt-4 w-full rounded-full bg-primary py-3 font-body text-sm font-semibold text-primary-foreground shadow-rose disabled:opacity-50"
                  >
                    Submit Feedback
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
