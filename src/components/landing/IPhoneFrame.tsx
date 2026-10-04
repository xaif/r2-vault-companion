import { cn } from "@/lib/utils";

interface IPhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

/**
 * A thin iPhone 17 Pro outline around a Simulator screenshot (1206 × 2622, about 1 : 2.17).
 * Corner radii are given as width% / height% so the curve stays circular at any size.
 */
const IPhoneFrame = ({ src, alt, className, loading = "lazy" }: IPhoneFrameProps) => (
  <div
    data-nav-tone="dark"
    className={cn(
      "relative bg-[#2c2c2e] p-[2.2%] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.45)] ring-1 ring-black/60",
      "[border-radius:16%/7.4%]",
      className,
    )}
  >
    <div className="relative overflow-hidden bg-black ring-1 ring-black [border-radius:13.8%/6.4%]">
      <img src={src} alt={alt} width={900} height={1957} loading={loading} decoding="async" className="block h-auto w-full" />
    </div>
  </div>
);

export default IPhoneFrame;
