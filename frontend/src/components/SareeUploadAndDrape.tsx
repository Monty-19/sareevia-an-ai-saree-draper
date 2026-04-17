import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Sparkles, AlertCircle, CheckCircle, Zap, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SareeAnalysis {
  type: string;
  fabric: string;
  color: string;
  pattern: string;
  bestBodyType: string;
  occasion: string[];
  drapingStyle: string;
  confidence: number;
}

const SareeUploadAndDrape = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<SareeAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showDrapingPreview, setShowDrapingPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setUploadedImage(result);
      setError(null);
      setAnalysis(null);
    };
    reader.readAsDataURL(file);
  };

  const analyzeWithAI = async () => {
    if (!uploadedImage) return;

    setAnalyzing(true);
    setError(null);

    try {
      // Simulate AI analysis with realistic saree data
      // In production, this would call an actual AI API
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const mockAnalysis: SareeAnalysis = {
        type: "Banarasi Silk",
        fabric: "Pure Silk with Zari Weaving",
        color: "Royal Purple with Golden Accents",
        pattern: "Floral Motifs with Geometric Design",
        bestBodyType: "Pear & Apple Shapes",
        occasion: ["Wedding", "Festival", "Formal Events"],
        drapingStyle: "Nivi Style with Puffed Blouse",
        confidence: 94,
      };

      setAnalysis(mockAnalysis);
      setShowDrapingPreview(true);
    } catch (err) {
      setError("Failed to analyze saree. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const clearUpload = () => {
    setUploadedImage(null);
    setAnalysis(null);
    setError(null);
    setShowDrapingPreview(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="upload-and-drape" className="relative overflow-hidden py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            AI-Powered Analysis
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Upload Your <span className="text-gradient-rose">Saree</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let our AI scan your saree to identify type, fabric, and the perfect draping style for your body
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex flex-col gap-6">
              {/* Upload Box */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative overflow-hidden rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 p-12 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <AnimatePresence mode="wait">
                  {uploadedImage ? (
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative"
                    >
                      <img
                        src={uploadedImage}
                        alt="Uploaded saree"
                        className="mx-auto max-h-96 w-full rounded-2xl object-cover"
                      />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          clearUpload();
                        }}
                        className="absolute right-4 top-4 rounded-full bg-red-500/80 p-2 text-white hover:bg-red-600"
                      >
                        <X size={20} />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="rounded-full bg-primary/10 p-4">
                        <Upload size={32} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-display text-lg font-semibold">Click to upload your saree</p>
                        <p className="text-sm text-muted-foreground">PNG, JPG or GIF up to 10MB</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4"
                  >
                    <AlertCircle size={20} className="text-destructive" />
                    <p className="text-sm text-destructive">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Analyze Button */}
              <Button
                onClick={analyzeWithAI}
                disabled={!uploadedImage || analyzing}
                size="lg"
                className="w-full gap-2 rounded-xl bg-gradient-to-r from-primary to-rose-500 py-6 text-base font-semibold hover:shadow-rose disabled:opacity-50"
              >
                {analyzing ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    <Zap size={20} />
                    Analyze Saree with AI
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Analysis Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <AnimatePresence mode="wait">
              {!analysis && !analyzing && (
                <motion.div
                  key="instructions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-2xl font-bold">How AI Analysis Works</h3>
                    <div className="mt-6 space-y-4">
                      {[
                        {
                          num: 1,
                          title: "Upload Saree Image",
                          desc: "Choose a clear photo of your saree",
                        },
                        {
                          num: 2,
                          title: "AI Identification",
                          desc: "Our AI identifies saree type, fabric, and pattern",
                        },
                        {
                          num: 3,
                          title: "Body Matching",
                          desc: "Get recommendations based on your body type",
                        },
                        {
                          num: 4,
                          title: "Draping Guide",
                          desc: "Receive step-by-step draping instructions",
                        },
                      ].map((step) => (
                        <div key={step.num} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 font-display font-bold text-primary">
                            {step.num}
                          </div>
                          <div>
                            <p className="font-semibold">{step.title}</p>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {analyzing && (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-border bg-card p-8"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="rounded-full border-4 border-primary/20 border-t-primary p-8"
                  >
                    <Sparkles size={32} className="text-primary" />
                  </motion.div>
                  <div className="text-center">
                    <p className="font-display text-lg font-semibold">Analyzing your saree...</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Our AI is identifying the saree type, fabric, and best draping style
                    </p>
                  </div>
                </motion.div>
              )}

              {analysis && (
                <motion.div
                  key="analysis"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* AI Confidence Badge */}
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-gradient-to-r from-green-50 to-emerald-50 p-4">
                    <CheckCircle size={24} className="text-green-600" />
                    <div>
                      <p className="font-semibold text-green-900">Analysis Complete</p>
                      <p className="text-sm text-green-700">{analysis.confidence}% confidence match</p>
                    </div>
                  </div>

                  {/* Analysis Details */}
                  <div className="space-y-4">
                    {[
                      { label: "Saree Type", value: analysis.type },
                      { label: "Fabric", value: analysis.fabric },
                      { label: "Color", value: analysis.color },
                      { label: "Pattern", value: analysis.pattern },
                      { label: "Best Body Type", value: analysis.bestBodyType },
                      { label: "Recommended Occasions", value: analysis.occasion.join(", ") },
                      { label: "Draping Style", value: analysis.drapingStyle },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-border/50 bg-card/50 p-4"
                      >
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1.5 font-display text-lg font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 pt-4">
                    {showDrapingPreview && (
                      <Button className="w-full gap-2 rounded-xl bg-primary py-6 text-base font-semibold">
                        <Sparkles size={20} />
                        View Draping Preview
                      </Button>
                    )}
                    <Button
                      onClick={clearUpload}
                      variant="outline"
                      className="w-full rounded-xl py-6 text-base font-semibold"
                    >
                      Try Another Saree
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Draping Preview Modal */}
        <AnimatePresence>
          {showDrapingPreview && analysis && uploadedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setShowDrapingPreview(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl"
              >
                <div className="sticky top-0 border-b border-border bg-card p-6 flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold">Draping Preview</h3>
                  <button
                    onClick={() => setShowDrapingPreview(false)}
                    className="rounded-full p-2 hover:bg-secondary"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-8">
                  <div className="space-y-8">
                    {/* Draping Steps */}
                    {[
                      "Step 1: Wrap Around Waist",
                      "Step 2: Create First Pleat",
                      "Step 3: Arrange Pallu",
                      "Step 4: Final Arrangement",
                    ].map((step, i) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="space-y-4"
                      >
                        <h4 className="font-display text-lg font-semibold">{step}</h4>
                        <div className="rounded-2xl border border-border/30 bg-secondary/30 p-8">
                          <div className="flex items-center justify-center gap-4">
                            <img
                              src={uploadedImage}
                              alt={step}
                              className="max-h-64 w-auto rounded-xl object-contain opacity-50"
                            />
                            <div className="text-center text-muted-foreground">
                              <Sparkles size={40} className="mx-auto text-primary/30" />
                              <p className="mt-2 text-sm">3D Draping Preview</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
                      <p className="text-sm text-muted-foreground">
                        💡 Pro Tip: The {analysis.drapingStyle} style works best with {analysis.fabric}. Follow our step-by-step guide in the Draping
                        Guide section for detailed video instructions!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SareeUploadAndDrape;
