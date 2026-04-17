import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, TrendingUp, Heart, Share2, Zap, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Recommendation {
  title: string;
  compatibility: number;
  reason: string;
  tips: string[];
  icon: string;
}

interface ScanResult {
  bodyType: string;
  height: string;
  skinTone: string;
  recommendations: Recommendation[];
}

const AIRecommendationEngine = () => {
  const [showResults, setShowResults] = useState(false);
  const [selectedSaree, setSelectedSaree] = useState<ScanResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRecommendations = async () => {
    setIsGenerating(true);
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const mockResult: ScanResult = {
      bodyType: "Pear Shape",
      height: "5'6\"",
      skinTone: "Golden Brown",
      recommendations: [
        {
          title: "Banarasi with Puffed Pallu",
          compatibility: 96,
          reason:
            "The heavy silk and puffed arrangement adds volume at the bust, perfectly balancing a pear-shape figure.",
          tips: [
            "Secure pleats with extra pins",
            "Keep pallu draped high",
            "Choose dark borders",
          ],
          icon: "👑",
        },
        {
          title: "Kanjeevaram with Wide Pallu",
          compatibility: 92,
          reason:
            "Rich colors and structured weave enhance your features while the wide pallu flatters your frame.",
          tips: [
            "Tuck pallu at shoulder",
            "Create defined pleats",
            "Use shoulder jewelry",
          ],
          icon: "✨",
        },
        {
          title: "Chiffon with Floating Pallu",
          compatibility: 88,
          reason:
            "Light fabric with elegant draping creates an ethereal look that complements warm skin tones.",
          tips: [
            "Let pallu flow freely",
            "Minimal pinning needed",
            "Layer with light jewelry",
          ],
          icon: "🌸",
        },
      ],
    };

    setSelectedSaree(mockResult);
    setShowResults(true);
    setIsGenerating(false);
  };

  return (
    <section className="relative overflow-hidden py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mb-4">
            <Wand2 size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">AI Powered</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Personalized Saree <span className="text-gradient-rose">Recommendations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes your body type and the uploaded saree to provide personalized draping recommendations and styling tips
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border/50 bg-gradient-to-br from-background to-secondary/20 p-8 md:p-12 shadow-soft"
        >
          {!showResults ? (
            <div className="flex flex-col items-center justify-center py-12">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-gradient-to-br from-primary/20 to-rose-500/20 p-6 mb-6"
              >
                <Wand2 size={40} className="text-primary" />
              </motion.div>

              <h3 className="font-display text-2xl font-bold text-center mb-3">
                Get AI-Powered Recommendations
              </h3>
              <p className="text-muted-foreground text-center max-w-sm mb-8">
                Upload your saree and let our AI create personalized draping and styling recommendations based on your body type
              </p>

              <Button
                onClick={generateRecommendations}
                disabled={isGenerating}
                size="lg"
                className="gap-2 rounded-xl bg-gradient-to-r from-primary to-rose-500 hover:shadow-rose"
              >
                {isGenerating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Zap size={20} />
                    </motion.div>
                    Generating Recommendations...
                  </>
                ) : (
                  <>
                    <Zap size={20} />
                    Generate AI Recommendations
                  </>
                )}
              </Button>
            </div>
          ) : selectedSaree ? (
            <div className="space-y-8">
              {/* Scan Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-3 gap-4 mb-8"
              >
                {[
                  { label: "Body Type", value: selectedSaree.bodyType },
                  { label: "Height", value: selectedSaree.height },
                  { label: "Skin Tone", value: selectedSaree.skinTone },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl border border-border/30 bg-card/50 p-4"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-display text-lg font-semibold">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Recommendations */}
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold flex items-center gap-2">
                  <TrendingUp size={24} className="text-primary" />
                  Top Recommendations
                </h3>

                {selectedSaree.recommendations.map((rec, i) => (
                  <motion.div
                    key={rec.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="group rounded-2xl border border-border/30 bg-card/50 p-6 hover:border-primary/50 transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        <span className="text-4xl">{rec.icon}</span>
                        <div>
                          <h4 className="font-display text-lg font-bold mb-1">
                            {rec.title}
                          </h4>
                          <p className="text-sm text-muted-foreground for">
                            {rec.reason}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        className="flex items-center gap-2 ml-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {rec.compatibility}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Match
                          </div>
                        </div>
                        <div className="relative h-12 w-12">
                          <svg
                            viewBox="0 0 100 100"
                            className="transform -rotate-90"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              className="text-secondary"
                            />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              strokeDasharray={`${(rec.compatibility / 100) * 283} 283`}
                              className="text-primary"
                              initial={{ strokeDasharray: "0 283" }}
                              animate={{
                                strokeDasharray: `${(rec.compatibility / 100) * 283} 283`,
                              }}
                              transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                            />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Tips */}
                    <div className="mt-4 pt-4 border-t border-border/20">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        💡 Styling Tips
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {rec.tips.map((tip) => (
                          <Badge
                            key={tip}
                            variant="secondary"
                            className="text-xs font-medium"
                          >
                            {tip}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="flex-1 rounded-xl"
                >
                  Generate New
                </Button>
                <Button className="flex-1 gap-2 rounded-xl bg-primary hover:bg-primary/90">
                  <Heart size={18} />
                  Save Favorites
                </Button>
                <Button variant="outline" size="icon" className="rounded-xl">
                  <Share2 size={18} />
                </Button>
              </div>

              {/* Pro Tip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="rounded-xl border border-blue-200/50 bg-blue-50/50 p-4 flex gap-3"
              >
                <AlertCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900/80">
                  <span className="font-semibold">Pro Tip:</span> Visit the
                  Draping Guide section for detailed video tutorials on how to
                  drape each recommended style!
                </p>
              </motion.div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default AIRecommendationEngine;
