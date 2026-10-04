import setupWelcome from "@/assets/screens/mac-setup-welcome.webp";
import setupConnect from "@/assets/screens/mac-setup-connect.webp";
import setupDone from "@/assets/screens/mac-setup-done.webp";

const steps = [
  {
    src: setupWelcome,
    title: "Open r2Vault",
    body: "The first time it opens, a short welcome shows what it can do.",
    alt: "Welcome to R2 Vault: browse every bucket, drag and drop to upload, always in your menu bar, and your bucket in Finder.",
  },
  {
    src: setupConnect,
    title: "Connect a bucket",
    body: "Paste the details from an R2 API token, with help on where to find them. r2Vault checks the connection before it saves anything.",
    alt: "Connect your bucket: fields for Account ID, Bucket Name, Access Key ID, Secret Access Key and an optional custom domain.",
  },
  {
    src: setupDone,
    title: "Show it in Finder",
    body: "Flip one switch to add the bucket to Finder, or leave it for later in Settings.",
    alt: "You're all set: studio-assets is connected, with a switch to show it in Finder.",
  },
];

const Setup = () => (
  <section data-nav-tone="dark" id="setup" aria-labelledby="setup-title" className="section bg-night text-white">
    <div className="mx-auto max-w-page px-6">
      <div className="mx-auto max-w-copy text-center">
        <h2 id="setup-title" className="type-headline">
          Connected in about a minute.
        </h2>
        <p className="type-lead mx-auto mt-6 max-w-[36ch] text-night-2">
          All you need is an R2 API token. <span className="text-white">Your keys go into the Keychain and only ever to Cloudflare.</span>
        </p>
      </div>

      <ol className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8">
        {steps.map((step, i) => (
          <li key={step.title}>
            <img
              src={step.src}
              alt={step.alt}
              width={1300}
              height={1002}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[12px] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] ring-1 ring-white/10"
            />
            <div className="mt-7 flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[13px] font-semibold tabular-nums"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-[19px] font-semibold tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-1.5 max-w-[36ch] text-[15px] leading-relaxed text-night-2">{step.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-16 text-center text-[15px] text-night-2">
        Need a token?{" "}
        <a
          href="https://docs.r2vault.app/introduction"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ember-light hover:underline"
        >
          Read the setup guide
        </a>
      </p>
    </div>
  </section>
);

export default Setup;
