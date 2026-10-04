import { useLatestRelease } from "@/hooks/use-latest-release";

const links = [
  { href: "https://github.com/xaif/r2Vault", label: "GitHub" },
  { href: "https://docs.r2vault.app/introduction", label: "Docs" },
  { href: "https://github.com/xaif/r2Vault/blob/main/CHANGELOG.md", label: "Changelog" },
  { href: "https://github.com/xaif/r2Vault/releases", label: "Releases" },
  { href: "https://github.com/xaif/r2Vault/issues", label: "Report an issue" },
];

const Footer = () => {
  const { version } = useLatestRelease();

  return (
    <footer data-nav-tone="light" className="bg-mist text-xs leading-relaxed text-ink-2">
      <div className="mx-auto max-w-page border-t border-black/10 px-6 py-8">
        <p className="max-w-[90ch]">
          r2Vault is an independent open-source project and isn't affiliated with Cloudflare or Apple. Cloudflare and R2 are
          trademarks of Cloudflare, Inc. Mac, iPhone, macOS, Finder and Quick Look are trademarks of Apple Inc.
        </p>
        <div className="mt-5 flex flex-col gap-3 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            r2Vault {version} by{" "}
            <a href="https://github.com/xaif" target="_blank" rel="noopener noreferrer" className="text-ink hover:underline">
              Xaif
            </a>
            . Released under the MIT License.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-ink hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
