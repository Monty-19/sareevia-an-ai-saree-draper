import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Download, Share2, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DrapingStep {
  title: string;
  description: string;
  tips: string[];
  duration: number;
}

interface DrapingSession {
  sareeType: string;
  bodyType: string;
  steps: DrapingStep[];
  totalTime: number;
}

const drapingSteps: DrapingStep[] = [
  {
    title: "Position the Saree",
    description: "Hold the saree center piece and position it at your waist level. The pallu should be on your right shoulder.",
    tips: [
      "Ensure the saree is wrinkle-free",
      "Stand straight for better measurements",
      "Keep your blouse tucked in",
    ],
    duration: 2,
  },
  {
    title: "Wrap Around Waist",
    description: "Wrap the saree around your waist from right to left. Leave about 5-6 feet for the pallu.",
    tips: [
      "Wrap snugly but not too tight",
      "Keep the border visible",
      "Secure with pins or a belt",
    ],
    duration: 3,
  },
  {
    title: "Create Pleats",
    description: "Create 5-7 equal pleats in the front. These pleats should fall from waist to ankle.",
    tips: [
      "Fold the pleats neatly",
      "Pin at the back of the waist",
      "Ensure all pleats are uniform",
    ],
    duration: 4,
  },
  {
    title: "Arrange Pallu",
    description: "Drape the pallu over your left shoulder. It should reach from shoulder to ankle.",
    tips: [
      "Arrange it in graceful folds",
      "Pin securely at the shoulder",
      "Let it flow naturally",
    ],
    duration: 2,
  },
  {
    title: "Adjust & Style",
    description: "Make final adjustments. Ensure the saree is balanced and all parts are secure.",
    tips: [
      "Check the mirror from all angles",
      "Adjust pleats if needed",
      "Add jewelry and accessories",
    ],
    duration: 1,
  },
];

const AIDrapingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  const handleNext = () => {
    if (currentStep < drapingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  const step = drapingSteps[currentStep];

  return (
    <>
      {/* Floating Assistant Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg hover:shadow-violet-500/50"
      >
        {!isOpen && <Sparkles size={24} />}
      </motion.button>

      {/* Draping Assistant Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-0 right-0 z-40 lg:bottom-24 lg:right-6 lg:max-w-md w-full lg:rounded-3xl rounded-t-3xl border border-border bg-card shadow-2xl lg:h-auto"
          >
            <div className="flex flex-col h-screen lg:h-auto max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-violet-500/10 to-purple-600/10 border-b border-border p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-violet-500 to-purple-600 p-2">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold">AI Draping Assistant</p>
                      <p className="text-xs text-muted-foreground">Step-by-step guidance</p>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </motion.button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1 bg-secondary/30">
                <motion.div
                  layout
                  className="h-full bg-gradient-to-r from-violet-500 to-purple-600"
                  style={{
                    width: `${((currentStep + 1) / drapingSteps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Step Counter */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        Step {currentStep + 1} of {drapingSteps.length}
                      </span>
                      <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1">
                        ~{step.duration} min
                      </span>
                    </div>

                    {/* Step Title */}
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>

                    {/* Tips Section */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground">💡 Pro Tips:</p>
                      <div className="space-y-2">
                        {step.tips.map((tip, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/30 p-3"
                          >
                            <span className="mt-1 text-primary">✓</span>
                            <span className="text-sm text-muted-foreground">{tip}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Aid Placeholder */}
                    <div className="rounded-2xl border border-dashed border-border/50 bg-secondary/20 p-8 text-center">
                      <Sparkles size={32} className="mx-auto text-primary/30 mb-2" />
                      <p className="text-xs text-muted-foreground">
                        3D Draping Animation
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer Controls */}
              <div className="sticky bottom-0 border-t border-border bg-background/95 p-4 space-y-3">
                <div className="flex gap-2">
                  <Button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    ← Back
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="ghost"
                    size="sm"
                    className="flex-1"
                  >
                    <RotateCcw size={16} />
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={currentStep === drapingSteps.length - 1}
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
                  >
                    Next →
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setShowGuide(!showGuide)}
                  >
                    <Download size={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Share2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIDrapingAssistant;
