import CopyCommand from "./CopyCommand";
import { ALTSTORE_SOURCE } from "./IPhone";
import appIcon from "@/assets/app-icon.webp";
import { useLatestRelease } from "@/hooks/use-latest-release";

const methods = [
  {
    title: "Homebrew",
    note: "Recommended. Update later with brew upgrade.",
    command: "brew install --cask xaif/tap/r2vault",
    label: "Copy Homebrew install command",
  },
  {
    title: "Terminal installer",
    note: "Downloads the latest release and checks its checksum before installing.",
    command: "curl -fsSL https://raw.githubusercontent.com/xaif/r2Vault/main/install.sh | bash",
    label: "Copy terminal installer command",
  },
  {
    title: "iPhone",
    note: "Add this source in AltStore or SideStore.",
    command: ALTSTORE_SOURCE,
    label: "Copy AltStore source URL",
  },
  {
    title: "Build from source",
    note: "Open Fiaxe.xcodeproj in Xcode and press ⌘R.",
    command: "git clone https://github.com/xaif/r2Vault.git",
    label: "Copy git clone command",
  },
];

const Install = () => {
  const { version, downloadUrl, releaseUrl } = useLatestRelease();

  return (
    <section data-nav-tone="light" id="install" aria-labelledby="install-title" className="section bg-mist">
      <div className="mx-auto max-w-page px-6">
        <div className="text-center">
          <img src={appIcon} alt="" width={128} height={128} className="mx-auto h-28 w-28" />
          <h2 id="install-title" className="type-headline mt-6">
            Get r2Vault.
          </h2>
          <p className="type-lead mx-auto mt-4 max-w-[30ch] text-ink-2">Free for Mac and iPhone.</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a href={downloadUrl} className="pill-ember h-11 px-7 text-[17px]">
              Download for Mac
            </a>
            <p className="text-sm text-ink-2">
              <a href={releaseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Version {version.replace(/^v/, "")}
              </a>
              . Requires macOS 26.2 or later, and runs on macOS 27.
            </p>
          </div>
        </div>

        <ul className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {methods.map((m) => (
            <li key={m.title} className="rounded-tile bg-white p-7 md:p-8">
              <h3 className="text-[19px] font-semibold tracking-[-0.02em]">{m.title}</h3>
              <p className="mt-1 text-[15px] text-ink-2">{m.note}</p>
              <CopyCommand command={m.command} label={m.label} className="mt-5" />
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 max-w-5xl rounded-tile border border-black/10 p-7 md:p-8">
          <h3 className="text-[17px] font-semibold tracking-[-0.02em]">Opening the downloaded app for the first time</h3>
          <p className="mt-2 max-w-[70ch] text-[15px] leading-relaxed text-ink-2">
            r2Vault isn't notarized by Apple, so macOS asks before it opens a copy you downloaded yourself. In Applications,
            Control-click r2Vault, choose Open, then click Open again. You only need to do this once. If macOS still blocks
            it, go to System Settings › Privacy &amp; Security and click Open Anyway.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Install;
