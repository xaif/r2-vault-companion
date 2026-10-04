import DesktopStage, { MenuBarStrip } from "./DesktopStage";
import finderWallpaper from "@/assets/stages/finder.webp";
import finderDrive from "@/assets/screens/mac-finder-drive.webp";
import finderMenu from "@/assets/screens/mac-finder-menu.webp";

const facts = [
  {
    title: "No space until opened",
    body: "Every file is listed right away, but it only downloads when you open it, just like iCloud Drive.",
  },
  {
    title: "Big videos stream",
    body: "In apps that read files directly, like IINA and VLC, a large video starts in a second or two. Only the part you watch is downloaded.",
  },
  {
    title: "Changes sync both ways",
    body: "Create, rename, move and delete in Finder, and the change goes to R2. Edits made elsewhere show up while r2Vault is running.",
  },
  {
    title: "Uploads pick up where they left off",
    body: "If the connection drops during a large upload, r2Vault sends only the parts R2 doesn't have yet.",
  },
];

const FinderDrive = () => (
  <section data-nav-tone="light" id="finder-drive" aria-labelledby="finder-drive-title" className="section bg-white">
    <div className="mx-auto max-w-page px-6">
      <div className="mx-auto max-w-copy text-center">
        <p className="type-kicker text-ember-deep">New in 2.0</p>
        <h2 id="finder-drive-title" className="type-headline mx-auto mt-2 max-w-[14ch]">
          All of your bucket. None of the disk space.
        </h2>
        <p className="type-lead mx-auto mt-6 max-w-[38ch] text-ink-2">
          Turn on Finder Drive and the bucket appears under Locations, next to your Mac's disks.{" "}
          <span className="text-ink">
            QuickTime, Final Cut Pro, Photoshop and Preview open its files like any others.
          </span>
        </p>
      </div>

      <DesktopStage wallpaper={finderWallpaper} className="mt-14 aspect-[16/10] rounded-[20px] md:mt-20 md:rounded-[28px]">
        <MenuBarStrip app="Finder" menus={["File", "Edit", "View", "Go", "Window", "Help"]} />
        <img
          src={finderDrive}
          alt="A Finder window showing the studio-assets bucket's Wallpapers folder. Downloaded images show thumbnails; the rest show a cloud icon because they haven't been downloaded."
          width={2000}
          height={1208}
          loading="lazy"
          decoding="async"
          className="window-shadow absolute left-[6cqw] top-[8cqw] w-[88cqw] md:left-[10cqw] md:w-[80cqw]"
        />
      </DesktopStage>

      <ul className="mt-16 grid gap-x-10 gap-y-10 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <li key={fact.title}>
            <h3 className="text-[19px] font-semibold leading-snug tracking-[-0.02em]">{fact.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{fact.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-24 grid items-center gap-12 md:mt-32 md:grid-cols-2 md:gap-16">
        <div className="md:order-2">
          <h3 className="type-title max-w-[16ch]">Keep what you need. Let macOS clear the rest.</h3>
          <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-ink-2">
            Right-click a file and choose <span className="font-semibold text-ink">Keep Downloaded</span> to always have it
            on your Mac. <span className="font-semibold text-ink">Remove Download</span> frees the space and leaves the file in
            your bucket, and macOS removes downloads on its own when it needs room.
          </p>
          <p className="mt-4 max-w-[44ch] text-[17px] leading-relaxed text-ink-2">
            Downloads stop before your disk drops below 2&nbsp;GB free. Settings shows how much each drive is using, and
            deleted items wait in the drive's Trash for 30 days.
          </p>
          <p className="mt-4 max-w-[44ch] text-[17px] leading-relaxed text-ink-2">
            On macOS 27, the whole folder tree stays listed in the background, so every folder opens instantly.
          </p>
        </div>

        <DesktopStage wallpaper={finderWallpaper} className="aspect-[5/4] rounded-[20px] md:order-1 md:rounded-[28px]">
          <img
            src={finderMenu}
            alt="Finder's right-click menu on a downloaded file, with Remove Download near the top and r2Vault's Keep Downloaded near the bottom."
            width={800}
            height={1140}
            loading="lazy"
            decoding="async"
            className="window-shadow absolute left-1/2 top-[7cqw] w-[52cqw] -translate-x-1/2 rounded-[2cqw]"
          />
        </DesktopStage>
      </div>
    </div>
  </section>
);

export default FinderDrive;
