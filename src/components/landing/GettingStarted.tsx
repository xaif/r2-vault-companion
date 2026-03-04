import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Beer, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLatestRelease } from "@/hooks/use-latest-release";

const installMethods = [
  {
    id: "curl",
    icon: Terminal,
    label: "One-line Install",
    tag: "Recommended",
    command: "curl -fsSL https://raw.githubusercontent.com/xaif/r2Vault/main/install.sh | bash",
    description: "Downloads the latest release, installs it, and handles quarantine automatically.",
  },
  {
    id: "homebrew",
    icon: Beer,
    label: "Homebrew",
    tag: null,
    command: "brew install --cask --no-quarantine xaif/tap/r2vault",
    description: "Install and update via Homebrew. No quarantine workaround needed.",
  },
];

const GettingStarted = () => {
  const { downloadUrl } = useLatestRelease();
  const [copied, setCopied] = useState<string | null>(null);

  const copyCommand = (id: string, cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="getting-started" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-mono text-sm font-medium tracking-wide uppercase">
            Install
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Up and running in seconds
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg">
            Pick your preferred method — all handle macOS quarantine for you.
          </p>
        </motion.div>

        {/* Install methods */}
        <div className="max-w-2xl mx-auto space-y-4">
          {installMethods.map((method, i) => (
            <motion.div
              key={method.id}
              className="group relative rounded-xl glass-card p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <method.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{method.label}</h3>
                    {method.tag && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {method.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <div className="flex items-center gap-2 rounded-lg bg-secondary/50 border border-border/50 px-3 py-2.5">
                    <code className="text-xs font-mono text-muted-foreground flex-1 overflow-x-auto whitespace-nowrap select-all">
                      {method.command}
                    </code>
                    <button
                      onClick={() => copyCommand(method.id, method.command)}
                      className="shrink-0 p-1 rounded hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
                      aria-label="Copy command"
                    >
                      {copied === method.id ? (
                        <Check className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Manual download link */}
          <motion.div
            className="text-center pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              Prefer a manual install?{" "}
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                Download the DMG
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
