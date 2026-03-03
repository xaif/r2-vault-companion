import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse-glow [animation-delay:1.5s]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium border border-primary/20 bg-primary/5 text-primary mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              v1.2.1 — Now Available
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your R2 Bucket,{" "}
            <span className="text-gradient">Beautifully Managed</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A native macOS app for managing Cloudflare R2 storage.
            Drag & drop uploads, file browsing, presigned URLs — all from your menu bar.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="group h-13 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl glow-orange"
              asChild
            >
              <a href="https://github.com/xaif/r2Vault/releases/latest" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download for macOS
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 px-8 text-base font-medium border-border/50 hover:border-primary/30 hover:bg-primary/5 rounded-xl"
              asChild
            >
              <a href="https://github.com/xaif/r2Vault" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </Button>
          </motion.div>

          {/* Hero mockup */}
          <motion.div
            className="mt-20 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative mx-auto max-w-3xl">
              {/* macOS window frame */}
              <div className="rounded-xl overflow-hidden border border-border/50 bg-card shadow-2xl">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="flex-1 text-center text-xs text-muted-foreground font-mono">r2Vault</span>
                </div>
                {/* App content mockup */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded bg-primary/60" />
                      </div>
                      <div>
                        <div className="h-3 w-32 bg-foreground/15 rounded" />
                        <div className="h-2 w-20 bg-foreground/8 rounded mt-1.5" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-7 w-16 rounded-md bg-primary/15 border border-primary/20" />
                      <div className="h-7 w-7 rounded-md bg-secondary" />
                    </div>
                  </div>
                  {/* File list mockup */}
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30"
                    >
                      <div className="w-8 h-8 rounded bg-primary/10 flex-shrink-0" />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 rounded bg-foreground/12" style={{ width: `${50 + i * 12}%` }} />
                        <div className="h-2 rounded bg-foreground/6" style={{ width: `${30 + i * 8}%` }} />
                      </div>
                      <div className="h-2 w-12 rounded bg-muted-foreground/20" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Glow effect behind */}
              <div className="absolute -inset-4 -z-10 bg-primary/10 blur-3xl rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
