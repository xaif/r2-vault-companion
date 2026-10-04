import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import dashboard from "@/assets/screens/mac-dashboard.webp";
import historyCrop from "@/assets/screens/mac-history-crop.webp";
import uploadPanel from "@/assets/screens/mac-upload-panel.webp";
import jurisdiction from "@/assets/screens/mac-jurisdiction.webp";

interface TileProps {
  title: string;
  body: string;
  children: ReactNode;
  className?: string;
  /** Classes for the area that holds the picture. */
  mediaClassName?: string;
}

const Tile = ({ title, body, children, className, mediaClassName }: TileProps) => (
  <li className={cn("flex flex-col overflow-hidden rounded-tile bg-mist", className)}>
    <div className="px-8 pt-8 md:px-10 md:pt-10">
      <h3 className="type-tile max-w-[18ch]">{title}</h3>
      <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ink-2">{body}</p>
    </div>
    <div className={cn("relative mt-8 flex-1", mediaClassName)}>{children}</div>
  </li>
);

const shot = "absolute max-w-none shadow-[0_24px_50px_-16px_rgb(0_0_0/0.4)]";

const Insights = () => (
  <section data-nav-tone="light" id="insights" aria-labelledby="insights-title" className="section bg-white">
    <div className="mx-auto max-w-page px-6">
      <h2 id="insights-title" className="type-headline mx-auto max-w-[16ch] text-center">
        Know what's in every bucket.
      </h2>

      <ul className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-6">
        <Tile
          className="md:col-span-4 md:row-span-2"
          mediaClassName="min-h-[300px] md:min-h-[460px]"
          title="See what's taking up space."
          body="The dashboard totals each bucket, breaks storage down by file type, and lists your largest files."
        >
          <img
            data-nav-tone="dark"
            src={dashboard}
            width={2000}
            height={1254}
            loading="lazy"
            decoding="async"
            alt="The r2Vault dashboard for studio-assets: 265.5 MB in 46 files across 9 folders, storage by file type, and the largest files."
            className={cn(shot, "left-8 top-0 w-[640px] rounded-tl-[14px] md:left-10 md:w-[980px]")}
          />
        </Tile>

        <Tile
          className="md:col-span-2"
          mediaClassName="min-h-[220px]"
          title="Every upload, with its link."
          body="History keeps the link, size and date of each upload, tied to the bucket it went to."
        >
          <img
            data-nav-tone="dark"
            src={historyCrop}
            width={1400}
            height={560}
            loading="lazy"
            decoding="async"
            alt="The History view listing uploads, each with its public link on media.example.com and the date."
            className={cn(shot, "left-8 top-0 w-[640px] rounded-tl-[14px] md:left-10")}
          />
        </Tile>

        <Tile
          className="md:col-span-2"
          mediaClassName="flex min-h-[260px] items-start justify-center px-8 pb-8 md:px-10"
          title="Uploads run side by side."
          body="Drop a folder and its files upload in parallel, each with progress you can cancel."
        >
          <img
            data-nav-tone="dark"
            src={uploadPanel}
            width={656}
            height={622}
            loading="lazy"
            decoding="async"
            alt="The upload panel: Uploading 3 of 4, with two videos at 22 and 54 percent and two images uploaded."
            className="w-full max-w-[328px] rounded-[22px] shadow-[0_24px_50px_-16px_rgb(0_0_0/0.4)]"
          />
        </Tile>

        <li className="grid overflow-hidden rounded-tile bg-mist md:col-span-6 md:grid-cols-[1fr_1.15fr]">
          <div className="px-8 pt-8 md:self-center md:px-12 md:py-14">
            <h3 className="type-tile max-w-[18ch]">EU, FedRAMP and US jurisdictions.</h3>
            <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed text-ink-2">
              Buckets created in a jurisdiction work too. Paste the bucket's S3 endpoint when you connect, and r2Vault picks
              the jurisdiction for you.
            </p>
          </div>
          <div className="flex items-center justify-center px-8 pb-8 pt-8 md:py-12 md:pl-0 md:pr-12">
            <img
              data-nav-tone="dark"
              src={jurisdiction}
              width={1040}
              height={569}
              loading="lazy"
              decoding="async"
              alt="Settings showing the bucket's credentials, with Jurisdiction set to European Union (EU)."
              className="w-full max-w-[560px] rounded-[18px] shadow-[0_24px_50px_-16px_rgb(0_0_0/0.4)]"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Insights;
