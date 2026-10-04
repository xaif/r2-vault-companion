import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyCommandProps {
  command: string;
  /** Read out to screen readers on the copy button, e.g. "Copy Homebrew command". */
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

/** A one-line terminal command with a copy button. */
const CopyCommand = ({ command, label, tone = "light", className }: CopyCommandProps) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be refused; the command stays selectable.
    }
  };

  return (
    <div
      className={cn(
        "flex min-w-0 items-center gap-2 rounded-full py-1.5 pl-5 pr-1.5",
        tone === "light" ? "bg-mist text-ink" : "bg-white/10 text-white",
        className,
      )}
    >
      <code className="min-w-0 flex-1 select-all overflow-x-auto whitespace-nowrap font-mono text-[13px] leading-8 [scrollbar-width:none]">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
          tone === "light" ? "hover:bg-black/5" : "hover:bg-white/10",
        )}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </div>
  );
};

export default CopyCommand;
