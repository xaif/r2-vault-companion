import { motion } from "framer-motion";

const techs = [
  { name: "SwiftUI", description: "Native UI" },
  { name: "MVVM", description: "Architecture" },
  { name: "async/await", description: "Concurrency" },
  { name: "CryptoKit", description: "Security" },
  { name: "Keychain", description: "Credential Storage" },
  { name: "Combine", description: "Reactive" },
];

const TechStack = () => {
  return (
    <section className="py-24 border-t border-border/30">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-mono text-sm font-medium tracking-wide uppercase">Built With</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">Modern Swift Stack</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <span className="font-mono font-semibold text-sm text-foreground">{tech.name}</span>
              <span className="text-xs text-muted-foreground">{tech.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
