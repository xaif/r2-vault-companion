import { motion } from "framer-motion";
import {
  Upload,
  FolderOpen,
  Link2,
  History,
  HardDrive,
  PanelTop,
  Eye,
  RefreshCw,
  Trash2,
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Drag & Drop Uploads",
    description: "Drop files and folders directly from Finder with real-time progress, cancel controls, and auto-copied public URLs.",
  },
  {
    icon: FolderOpen,
    title: "File Browser",
    description: "Finder-style navigation with icon and list views, breadcrumbs, search, sort, and filter by name, size, or date.",
  },
  {
    icon: Eye,
    title: "Quick Look Preview",
    description: "Press spacebar to preview any file instantly — just like Finder. No need to download first.",
  },
  {
    icon: Link2,
    title: "Presigned URLs",
    description: "Generate secure, time-limited sharing links for any file with a single click.",
  },
  {
    icon: Trash2,
    title: "Batch Operations",
    description: "Delete files, folders, or entire directory trees in one action. Batch delete multiple items with a single confirmation.",
  },
  {
    icon: HardDrive,
    title: "Multiple Buckets",
    description: "Switch between multiple R2 buckets effortlessly from the gear menu. Manage all your storage in one place.",
  },
  {
    icon: PanelTop,
    title: "Menu Bar Access",
    description: "Always one click away in your macOS menu bar. Drop files onto the popover to upload instantly.",
  },
  {
    icon: History,
    title: "Upload History",
    description: "Full upload history per bucket with copy link, download, and delete actions. Track everything you've uploaded.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Update",
    description: "Check for updates from the app menu. New releases download and install automatically — no manual DMG hunting.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-mono text-sm font-medium tracking-wide uppercase">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Everything you need for R2
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg">
            Built with SwiftUI for a truly native macOS experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative p-6 rounded-xl glass-card hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
