import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-10">
      <div className="container px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-lg text-gradient">r2Vault</span>
            <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded border border-border/50 bg-secondary/30">
              v1.2.1
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>MIT License</span>
            <a
              href="https://github.com/xaif/r2Vault"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
