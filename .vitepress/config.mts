import { defineConfig } from "vitepress";
import { meta } from "./const";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: meta.name,
  description: meta.description,
  titleTemplate: ":title〣016622",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  appearance: "dark",
  ignoreDeadLinks: true,
  sitemap: {
    hostname: meta.hostname,
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Start here", link: "/guides/beginning/start" },
    ],
    sidebar: [
      {
        text: "Guides",
        items: [
          {
            text: "🏁 Beginning",
            items: [
              { text: "👋 Welcome", link: "/guides/beginning/start" },
              {
                text: "☁️ Cloudflare Proxy",
                link: "/guides/cloudflare",
              },
              {
                text: "📁 qBittorent Setup",
                link: "/guides/qbittorrent",
              },
            ],
          },
          {
            text: "🪟 Windows",
            items: [
              { text: "🔒 Privacy", link: "/guides/windows/privacy" },
              { text: "🍚 Theming", link: "/guides/windows/ricing" },
              { text: "💽 Bootable USB", link: "/guides/windows/bootableUSB" },
              { text: "🔧 Tweaks", link: "/guides/windows/tweaks" },
            ],
          },
        ],
      },
      {
        text: "Useful",
        items: [
          {
            text: "🆓 Unlimited Trials",
            link: "/guides/trials",
          },
          {
            text: "⬇️ JDownloader2",
            link: "/guides/jdownloader2",
          },
          {
            text: "⌨️ Free KVM",
            link: "/guides/freekvm",
          },
          {
            text: "📄 PDF",
            link: "/guides/pdf",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/016622/wiki" },
      { icon: "discord", link: "https://discord.gg/jqruB4FJJ5" },
    ],
  },
});
