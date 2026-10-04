import { Eye, HardDrive, LayoutGrid, Link2, Search, Trash2 } from "lucide-react";
import DesktopStage, { MenuBarStrip } from "./DesktopStage";
import browseWallpaper from "@/assets/stages/browse.webp";
import browserGrid from "@/assets/screens/mac-browser-grid.webp";

const features = [
  {
    icon: LayoutGrid,
    title: "Icon and list views",
    body: "Thumbnails for images and video, or a list you can sort by name, kind, size or date.",
  },
  {
    icon: Eye,
    title: "Quick Look",
    body: "Select a file and press Space to preview images, video and PDFs. Download, copy the link or delete from the preview.",
  },
  {
    icon: Search,
    title: "Search every subfolder",
    body: "Search looks through the whole folder you're in, including everything nested inside it.",
  },
  {
    icon: Link2,
    title: "Links you control",
    body: "Copy a public link on your own domain, or create a presigned link that expires for files you keep private.",
  },
  {
    icon: Trash2,
    title: "Clean up in one go",
    body: "Delete a batch of files, or a folder and everything in it, with a single confirmation.",
  },
  {
    icon: HardDrive,
    title: "Every bucket, one sidebar",
    body: "Add as many buckets as you use and switch between them. History and downloads stay tied to the right one.",
  },
];

const Browse = () => (
  <section data-nav-tone="light" id="browse" aria-labelledby="browse-title" className="section bg-mist">
    <div className="mx-auto max-w-page px-6">
      <div className="mx-auto max-w-copy text-center">
        <h2 id="browse-title" className="type-headline">
          If you know Finder, you know r2Vault.
        </h2>
        <p className="type-lead mx-auto mt-6 max-w-[40ch] text-ink-2">
          Folders, breadcrumbs, thumbnails and drag and drop, built with SwiftUI.{" "}
          <span className="text-ink">No web dashboard, no command line.</span>
        </p>
      </div>

      <DesktopStage wallpaper={browseWallpaper} className="mt-14 aspect-[16/10] rounded-[20px] md:mt-20 md:rounded-[28px]">
        <MenuBarStrip />
        <img
          src={browserGrid}
          alt="r2Vault's browser in icon view: the Wallpapers folder with 28 image and video thumbnails, a sidebar with the studio-assets bucket, History, Settings and Dashboard."
          width={2000}
          height={1254}
          loading="lazy"
          decoding="async"
          className="window-shadow absolute left-[4cqw] top-[8cqw] w-[92cqw] md:left-[11cqw] md:w-[78cqw]"
        />
      </DesktopStage>

      <ul className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
        {features.map(({ icon: Icon, title, body }) => (
          <li key={title} className="max-w-[34ch]">
            <Icon className="h-7 w-7 text-ember-deep" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{body}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Browse;
