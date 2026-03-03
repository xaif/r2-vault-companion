import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import screenshot from "@/assets/screenshot.png";
import { useLatestRelease } from "@/hooks/use-latest-release";

const Hero = () => {
  const { version, downloadUrl } = useLatestRelease();
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
              {version} — Now Available
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
              className="h-12 px-7 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
              asChild
            >
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download for macOS
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 text-base font-medium border-border/50 hover:border-primary/30 hover:bg-primary/5 rounded-xl"
              asChild
            >
              <a href="https://github.com/xaif/r2Vault" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </motion.div>

          {/* Quarantine note */}
          <motion.div
            className="mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              Not notarized by Apple. If macOS shows a warning, run:
            </p>
            <code className="inline-block mt-1.5 px-3 py-1.5 rounded-md bg-secondary/50 border border-border/50 text-xs font-mono text-muted-foreground select-all">
              xattr -dr com.apple.quarantine /Applications/R2Vault.app
            </code>
          </motion.div>

          {/* Real app screenshot */}
          <motion.div
            className="mt-20 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-xl overflow-hidden border border-border/50 shadow-2xl">
                <img
                  src={screenshot}
                  alt="r2Vault — Browse your R2 bucket with a beautiful native macOS interface"
                  className="w-full h-auto"
                  loading="eager"
                />
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
