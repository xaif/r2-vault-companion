import IPhoneFrame from "./IPhoneFrame";
import CopyCommand from "./CopyCommand";
import iosFilesGrid from "@/assets/screens/ios-files-grid.webp";
import iosUploading from "@/assets/screens/ios-uploading.webp";
import iosDashboard from "@/assets/screens/ios-dashboard.webp";

export const ALTSTORE_SOURCE = "https://raw.githubusercontent.com/xaif/r2Vault/main/altstore-source.json";

const IPhone = () => (
  <section data-nav-tone="light" id="iphone" aria-labelledby="iphone-title" className="section overflow-hidden bg-mist">
    <div className="mx-auto max-w-page px-6">
      <div className="mx-auto max-w-copy text-center">
        <h2 id="iphone-title" className="type-headline">
          Your bucket, in your pocket.
        </h2>
        <p className="type-lead mx-auto mt-6 max-w-[38ch] text-ink-2">
          r2Vault for iPhone browses and previews the same buckets and uploads photos, videos and documents.{" "}
          <span className="text-ink">Upload progress follows you to the Lock Screen as a Live Activity.</span>
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-5xl items-end justify-center gap-4 sm:gap-8 md:mt-20">
        <IPhoneFrame
          src={iosDashboard}
          alt="r2Vault on iPhone: the Dashboard tab showing 341.8 MB in 50 files, and storage by file type."
          className="hidden w-[30%] max-w-[290px] translate-y-10 sm:block"
        />
        <IPhoneFrame
          src={iosFilesGrid}
          alt="r2Vault on iPhone: the Wallpapers folder in grid view with image and video thumbnails, and a Liquid Glass tab bar."
          className="w-[70%] max-w-[320px] sm:w-[34%]"
        />
        <IPhoneFrame
          src={iosUploading}
          alt="r2Vault on iPhone: three uploads in progress in the Videos folder, each with its own progress ring and cancel button."
          className="hidden w-[30%] max-w-[290px] translate-y-10 sm:block"
        />
      </div>

      <div className="mx-auto mt-24 max-w-2xl text-center">
        <h3 className="type-tile">Install with AltStore or SideStore.</h3>
        <p className="mx-auto mt-3 max-w-[48ch] text-[15px] leading-relaxed text-ink-2">
          Add the r2Vault source in AltStore or SideStore, then install r2Vault from it. Updates arrive through the same
          source. Requires iOS 26.2 or later.
        </p>
        <CopyCommand command={ALTSTORE_SOURCE} label="Copy AltStore source URL" className="mx-auto mt-6 max-w-xl bg-white" />
      </div>
    </div>
  </section>
);

export default IPhone;
