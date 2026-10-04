import { useEffect, useRef, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import appIcon from "@/assets/app-icon.webp";
import { useLatestRelease } from "@/hooks/use-latest-release";
import { cn } from "@/lib/utils";

const links = [
  { href: "#finder-drive", label: "Finder Drive" },
  { href: "#browse", label: "Features" },
  { href: "#iphone", label: "iPhone" },
  { href: "#install", label: "Install" },
  { href: "https://docs.r2vault.app/introduction", label: "Docs", external: true },
];

const external = { target: "_blank", rel: "noopener noreferrer" };

type Tone = "dark" | "light";

/** Glass for each kind of section underneath. Sections opt in with data-nav-tone. */
const glass: Record<Tone, string> = {
  dark: "border-white/10 bg-[#161617]/65 text-white shadow-[0_12px_40px_-12px_rgb(0_0_0/0.6),inset_0_1px_0_rgb(255_255_255/0.08)]",
  light:
    "border-black/[0.06] bg-white/65 text-ink shadow-[0_12px_40px_-14px_rgb(0_0_0/0.22),inset_0_1px_0_rgb(255_255_255/0.8)]",
};
const linkTone: Record<Tone, string> = {
  dark: "text-white/75 hover:bg-white/10 hover:text-white",
  light: "text-ink/70 hover:bg-black/[0.05] hover:text-ink",
};
const secondaryTone: Record<Tone, string> = {
  dark: "bg-white/10 hover:bg-white/15",
  light: "bg-black/[0.05] hover:bg-black/[0.08]",
};

/** Tone of the innermost tagged element under a point, looking past the nav itself. */
const toneAt = (x: number, y: number, header: Element | null): Tone => {
  for (const el of document.elementsFromPoint(x, y)) {
    if (header?.contains(el)) continue;
    const tagged = el.closest<HTMLElement>("[data-nav-tone]");
    if (tagged) return tagged.dataset.navTone === "dark" ? "dark" : "light";
  }
  return "light";
};

/**
 * Picks the nav's glass from what is actually behind it: sections, wallpaper stages and dark
 * screenshots carry data-nav-tone. Samples three points across the bar and goes with the majority.
 */
const useToneBehind = (navRef: React.RefObject<HTMLElement>) => {
  const [tone, setTone] = useState<Tone>("dark");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const nav = navRef.current;
      if (!nav) return;
      const r = nav.getBoundingClientRect();
      const y = r.top + r.height / 2;
      const header = nav.closest("header");
      const dark = [0.2, 0.5, 0.8].filter((f) => toneAt(r.left + r.width * f, y, header) === "dark").length;
      setTone(dark >= 2 ? "dark" : "light");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [navRef]);

  return tone;
};

/** A floating glass capsule that turns light or dark to match the section behind it. */
const Navbar = () => {
  const { downloadUrl } = useLatestRelease();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const tone = useToneBehind(navRef);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const surface = cn(
    "border backdrop-blur-2xl backdrop-saturate-[1.8] transition-[background-color,border-color,box-shadow,color] duration-300",
    glass[tone],
  );

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
      <nav
        ref={navRef}
        aria-label="r2Vault"
        className={cn("mx-auto flex h-14 max-w-[960px] items-center gap-1 rounded-full pl-4 pr-1.5", surface)}
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-full pr-3 text-[17px] font-semibold tracking-[-0.02em]">
          <img src={appIcon} alt="" width={28} height={28} className="h-7 w-7" />
          r2Vault
        </a>

        <ul className="mx-auto hidden items-center lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.external ? external : {})}
                className={cn("rounded-full px-3.5 py-2 text-[15px] transition-colors", linkTone[tone])}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
          <a
            href="https://github.com/xaif/r2Vault"
            {...external}
            className={cn("pill hidden h-11 px-4 text-[15px] sm:inline-flex", secondaryTone[tone])}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a href={downloadUrl} className="pill-ember h-11 px-5 text-[15px]">
            Download
          </a>
          <button
            type="button"
            className={cn("flex h-11 w-11 items-center justify-center rounded-full lg:hidden", secondaryTone[tone], "bg-transparent")}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div id="nav-menu" hidden={!open} className={cn("mx-auto mt-2 max-w-[960px] rounded-[28px] p-2 lg:hidden", surface, tone === "dark" ? "bg-[#161617]/90" : "bg-white/90")}>
        <ul>
          {[...links, { href: "https://github.com/xaif/r2Vault", label: "GitHub", external: true }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                {...(link.external ? external : {})}
                className={cn("block rounded-2xl px-4 py-3 text-[17px] transition-colors", linkTone[tone])}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
