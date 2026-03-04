import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Download } from "lucide-react";
import { useLatestRelease } from "@/hooks/use-latest-release";

const Navbar = () => {
  const { downloadUrl } = useLatestRelease();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-xl text-gradient">
          r2Vault
        </a>

        <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#getting-started" className="hover:text-foreground transition-colors">Get Started</a>
          <a href="https://docs.r2vault.app/introduction" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Docs</a>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-lg" asChild>
            <a href="https://github.com/xaif/r2Vault" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          <Button size="sm" className="rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium" asChild>
            <a href={downloadUrl} download>
              <Download className="w-3.5 h-3.5" />
              Download
            </a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
