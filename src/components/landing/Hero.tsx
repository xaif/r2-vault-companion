import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, HardDrive } from "lucide-react";
import DesktopStage, { MENU_BAR_HEIGHT, MenuBarStrip } from "./DesktopStage";
import CopyCommand from "./CopyCommand";
import { useLatestRelease } from "@/hooks/use-latest-release";
import heroWallpaper from "@/assets/stages/hero.webp";
import browserUploading from "@/assets/screens/mac-browser-uploading.webp";
import menuBarUploading from "@/assets/screens/mac-menubar-uploading.webp";

const ease = [0.22, 1, 0.36, 1] as const;
// Like any third-party menu bar extra, r2Vault's icon sits left of the system icons,
// and its popover hangs centered beneath it.
const ICON_AT = 28;
const POPOVER_WIDTH = 22;

/** The green drive tile the app uses for "Your bucket in Finder", sized to sit inside a headline. */
const DriveTile = () => (
  <span
    aria-hidden="true"
    className="mx-[0.06em] inline-flex h-[0.86em] w-[0.86em] -translate-y-[0.06em] items-center justify-center rounded-[24%] bg-gradient-to-b from-[#8be38f] to-[#2fb14b] align-middle shadow-[inset_0_1px_0_rgb(255_255_255/0.45),0_0.06em_0.18em_rgb(0_0_0/0.35)]"
  >
    <HardDrive className="h-[0.5em] w-[0.5em] text-white" strokeWidth={2.4} />
  </span>
);

const Hero = () => {
  const { downloadUrl, version } = useLatestRelease();
  const reduceMotion = useReducedMotion();
  const [popoverOpen, setPopoverOpen] = useState(!!reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setPopoverOpen(true);
      return;
    }
    const t = window.setTimeout(() => setPopoverOpen(true), 1100);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <section data-nav-tone="dark" id="top" aria-labelledby="hero-title" className="overflow-hidden bg-night pt-32 text-white md:pt-40">
      <div className="mx-auto max-w-page px-6 text-center">
        <a
          href="#finder-drive"
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] py-1 pl-1 pr-3 text-[14px] text-white/85 transition-colors hover:bg-white/10"
        >
          <span className="rounded-full bg-ember-bright/25 px-2.5 py-0.5 text-[12px] font-semibold text-ember-light">
            {version.replace(/^v/, "").replace(/\.0$/, "")}
          </span>
          Mount any bucket in Finder
          <ChevronRight className="h-3.5 w-3.5 text-white/60" aria-hidden="true" />
        </a>

        <h1
          id="hero-title"
          className="mx-auto mt-7 max-w-[13ch] text-[clamp(2.75rem,7.6vw,6.75rem)] font-bold leading-[1.04] tracking-[-0.04em] [text-wrap:balance]"
        >
          Your{" "}
          <span className="whitespace-nowrap rounded-[0.4em] bg-[#ffd6c2] px-[0.24em] text-ember shadow-[inset_0_-0.04em_0_rgb(196_82_31/0.15)]">
            R2 bucket
          </span>{" "}
          right in <DriveTile />{" "}
          Finder
        </h1>

        <p className="mx-auto mt-7 max-w-[34rem] text-[clamp(1.0625rem,1.5vw,1.3125rem)] leading-[1.45] tracking-[-0.012em] text-night-2">
          r2Vault is the free, open-source Mac app for Cloudflare R2. Open any file without downloading the bucket, drop
          files on the menu bar to upload, and share a link in one click.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={downloadUrl} className="pill-ember h-12 px-7 text-[17px]">
            Download for Mac
          </a>
          <a href="#finder-drive" className="pill h-12 bg-white/10 pl-7 pr-5 text-[17px] text-white hover:bg-white/15">
            See how it works
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mx-auto mt-6 flex max-w-md flex-col items-center gap-2">
          <p className="text-[13px] text-night-2">Or install with Homebrew. Requires macOS 26.2 or later.</p>
          <CopyCommand
            command="brew install --cask xaif/tap/r2vault"
            label="Copy Homebrew install command"
            tone="dark"
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1360px] px-3 md:mt-20">
        <DesktopStage wallpaper={heroWallpaper} className="aspect-[16/10] rounded-t-[20px] md:aspect-[16/7.6] md:rounded-t-[28px]">
          <MenuBarStrip iconAt={ICON_AT} iconActive={popoverOpen} />

          <motion.img
            src={browserUploading}
            alt="r2Vault's file browser showing a folder of images as thumbnails, with four uploads in progress in the corner."
            width={2000}
            height={1254}
            loading="eager"
            className="window-shadow absolute left-[4cqw] top-[10cqw] w-[92cqw] md:left-[5cqw] md:top-[12cqw] md:w-[64cqw]"
            initial={reduceMotion ? false : { opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
          />

          <motion.img
            src={menuBarUploading}
            alt="The r2Vault menu bar popover: a drop zone, a video uploading at 49 percent, recent uploads, and a Link copied confirmation."
            width={692}
            height={932}
            className="window-shadow absolute hidden origin-top md:block"
            style={{
              right: `${ICON_AT - POPOVER_WIDTH / 2}cqw`,
              width: `${POPOVER_WIDTH}cqw`,
              top: `calc(${MENU_BAR_HEIGHT} - 0.2cqw)`,
            }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: -6 }}
            animate={popoverOpen ? { opacity: 1, scale: 1, y: 0 } : undefined}
            transition={{ duration: 0.45, ease }}
          />
        </DesktopStage>
      </div>
    </section>
  );
};

export default Hero;
