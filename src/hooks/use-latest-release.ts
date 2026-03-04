import { useState, useEffect } from "react";

interface GitHubRelease {
  tag_name: string;
  html_url: string;
  assets: { browser_download_url: string; name: string }[];
}

interface ReleaseInfo {
  version: string;
  downloadUrl: string;
  releaseUrl: string;
}

const FALLBACK: ReleaseInfo = {
  version: "v1.2.5",
  downloadUrl: "https://github.com/xaif/r2Vault/releases/latest",
  releaseUrl: "https://github.com/xaif/r2Vault/releases/latest",
};

export function useLatestRelease() {
  const [release, setRelease] = useState<ReleaseInfo>(FALLBACK);

  useEffect(() => {
    fetch("https://api.github.com/repos/xaif/r2Vault/releases/latest")
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((data: GitHubRelease) => {
        const dmg = data.assets?.find((a) => a.name.endsWith(".dmg"));
        setRelease({
          version: data.tag_name,
          downloadUrl: dmg?.browser_download_url || data.html_url,
          releaseUrl: data.html_url,
        });
      })
      .catch(() => { /* keep fallback */ });
  }, []);

  return release;
}
