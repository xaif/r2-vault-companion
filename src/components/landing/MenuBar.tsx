import DesktopStage, { MENU_BAR_HEIGHT, MenuBarStrip } from "./DesktopStage";
import nightWallpaper from "@/assets/stages/night.webp";
import menuBarUploading from "@/assets/screens/mac-menubar-uploading.webp";

const details = [
  {
    title: "Drop from any app",
    body: "Drag files onto the menu bar icon, or onto the open popover. No window to find first.",
  },
  {
    title: "Progress you can stop",
    body: "Every file gets its own progress bar and cancel button. Cancel All stops the lot.",
  },
  {
    title: "Recent uploads, one click away",
    body: "Copy a link again, download a file, or delete it from the bucket.",
  },
  {
    title: "Out of the Dock",
    body: "r2Vault lives in the menu bar. ⌘Q closes its windows and keeps it running; Quit r2Vault in the menu bar menu quits it.",
  },
];

const MenuBar = () => (
  <section data-nav-tone="dark" id="menu-bar" aria-labelledby="menu-bar-title" className="section bg-night text-white">
    <div className="mx-auto grid max-w-page items-center gap-14 px-6 md:grid-cols-[1fr_1.05fr] md:gap-20">
      <div>
        <h2 id="menu-bar-title" className="type-headline max-w-[13ch]">
          Drop it on the menu bar.
        </h2>
        <p className="type-lead mt-6 max-w-[34ch] text-night-2">
          When the upload finishes, <span className="text-white">its public link is already on your clipboard.</span>
        </p>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          {details.map((d) => (
            <div key={d.title}>
              <dt className="text-[17px] font-semibold tracking-[-0.02em]">{d.title}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-night-2">{d.body}</dd>
            </div>
          ))}
        </dl>
      </div>

      <DesktopStage wallpaper={nightWallpaper} className="aspect-square rounded-[20px] md:rounded-[28px]">
        <MenuBarStrip iconAt={44} iconActive />
        <img
          src={menuBarUploading}
          alt="The r2Vault menu bar popover with a drop zone, Interview-4K.mp4 uploading at 49 percent, three recent uploads with thumbnails, and a green Link copied! banner."
          width={692}
          height={932}
          loading="lazy"
          decoding="async"
          className="window-shadow absolute w-[64cqw]"
          style={{ right: "12cqw", top: `calc(${MENU_BAR_HEIGHT} - 0.3cqw)` }}
        />
      </DesktopStage>
    </div>
  </section>
);

export default MenuBar;
