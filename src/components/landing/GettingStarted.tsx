import { motion } from "framer-motion";
import { Download, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download",
    description: "Grab the latest DMG from GitHub Releases and install r2Vault.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure",
    description: "Add your R2 credentials — securely stored in macOS Keychain.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Manage",
    description: "Start browsing, uploading, and sharing files from your menu bar.",
  },
];

const GettingStarted = () => {
  return (
    <section id="getting-started" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-mono text-sm font-medium tracking-wide uppercase">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Up and running in minutes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-mono text-xs text-primary/60 mb-2">{s.step}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-primary/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
