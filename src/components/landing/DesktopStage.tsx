import type { CSSProperties, ReactNode } from "react";
import { BatteryFull, Search, Share, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

/** Height of the menu bar strip, in container-query units of the stage. */
export const MENU_BAR_HEIGHT = "max(24px, 2.5cqw)";

const glyph = (min: number, cqw: number): CSSProperties => ({
  width: `max(${min}px, ${cqw}cqw)`,
  height: `max(${min}px, ${cqw}cqw)`,
});

/** Control Center's two-toggle glyph, which lucide doesn't have. */
const ControlCenter = ({ style }: { style: CSSProperties }) => (
  <svg viewBox="0 0 16 16" fill="none" style={style} aria-hidden="true">
    <rect x="1.25" y="1.75" width="13.5" height="5.5" rx="2.75" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="4.5" cy="4.5" r="1.6" fill="currentColor" />
    <rect x="1.25" y="8.75" width="13.5" height="5.5" rx="2.75" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="11.5" cy="11.5" r="1.6" fill="currentColor" />
  </svg>
);

interface MenuBarStripProps {
  /** App name shown in bold, followed by its menus. */
  app?: string;
  menus?: string[];
  /** Distance of the r2Vault icon's center from the stage's right edge, in cqw. */
  iconAt?: number;
  /** Highlights the r2Vault icon, as when its popover is open. */
  iconActive?: boolean;
  className?: string;
}

/** A translucent macOS-style menu bar drawn on top of a stage wallpaper. */
export const MenuBarStrip = ({
  app = "R2 Vault",
  menus = ["File", "Edit", "View", "Window", "Help"],
  iconAt = 28,
  iconActive = false,
  className,
}: MenuBarStripProps) => (
  <div
    aria-hidden="true"
    className={cn(
      "absolute inset-x-0 top-0 z-10 flex items-center bg-black/20 text-white backdrop-blur-2xl backdrop-saturate-150",
      "shadow-[inset_0_-1px_0_rgb(255_255_255/0.08)] [text-shadow:0_0_6px_rgb(0_0_0/0.25)]",
      className,
    )}
    style={{ height: MENU_BAR_HEIGHT, fontSize: "max(11px, 1.08cqw)", paddingInline: "1.8cqw" }}
  >
    <div className="flex items-center font-medium" style={{ gap: "1.7cqw" }}>
      <span className="font-bold">{app}</span>
      {menus.map((menu) => (
        <span key={menu} className="menubar-menu">
          {menu}
        </span>
      ))}
    </div>

    <span
      className={cn(
        "absolute flex items-center justify-center rounded-[6px] transition-colors duration-300",
        iconActive ? "bg-white/30" : "bg-transparent",
      )}
      style={{ right: `${iconAt}cqw`, transform: "translateX(50%)", width: "max(24px, 2.4cqw)", height: "max(19px, 1.9cqw)" }}
    >
      <Share strokeWidth={2.2} style={glyph(12, 1.2)} />
    </span>

    <div className="ml-auto flex items-center font-medium tabular-nums" style={{ gap: "1.5cqw" }}>
      <BatteryFull strokeWidth={1.8} className="menubar-extra" style={glyph(17, 1.75)} />
      <Wifi strokeWidth={2.4} style={glyph(13, 1.3)} />
      <Search strokeWidth={2.6} className="menubar-extra" style={glyph(12, 1.2)} />
      <ControlCenter style={glyph(13, 1.3)} />
      <span>
        <span className="menubar-date">Sun Oct 4&nbsp;&nbsp;</span>9:41 AM
      </span>
    </div>
  </div>
);

interface DesktopStageProps {
  wallpaper: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** A wallpaper "desktop" that Mac screenshots are placed on. Children size themselves in cqw. */
const DesktopStage = ({ wallpaper, children, className, style }: DesktopStageProps) => (
  <div data-nav-tone="dark" className={cn("stage", className)} style={{ backgroundImage: `url(${wallpaper})`, ...style }}>
    {children}
  </div>
);

export default DesktopStage;
