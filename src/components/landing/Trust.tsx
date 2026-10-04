import { Github, KeyRound, RefreshCw, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: KeyRound,
    title: "Keys in your Keychain",
    body: "Your R2 credentials are stored in the macOS and iOS Keychain, and only ever sent to Cloudflare.",
  },
  {
    icon: ShieldCheck,
    title: "Checked before install",
    body: "The installer and the in-app updater verify each release against its published SHA-256 checksum before replacing the app.",
  },
  {
    icon: RefreshCw,
    title: "Updates itself",
    body: "Choose Check for Updates in the r2Vault menu, and the new version downloads and installs for you.",
  },
  {
    icon: Github,
    title: "Open source",
    body: "Every line is on GitHub under the MIT License. Read it, build it yourself, or send a fix.",
  },
];

const Trust = () => (
  <section data-nav-tone="light" id="privacy" aria-labelledby="privacy-title" className="section bg-white">
    <div className="mx-auto max-w-page px-6">
      <h2 id="privacy-title" className="type-headline max-w-[14ch]">
        Free, open, and yours to check.
      </h2>
      <ul className="mt-14 grid gap-x-10 gap-y-12 border-t border-black/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ icon: Icon, title, body }) => (
          <li key={title}>
            <Icon className="h-7 w-7 text-ember-deep" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{body}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Trust;
