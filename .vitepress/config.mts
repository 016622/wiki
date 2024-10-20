import { defineConfig } from "vitepress";
import { meta } from "./const";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: meta.name,
  description: meta.description,
  titleTemplate: ":title 〣 :description",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  appearance: "dark",
  ignoreDeadLinks: true,
  sitemap: {
    hostname: meta.hostname,
  },
  themeConfig: {
    search: {
      provider: "local",
    },
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
            collapsed: false,
            items: [
              { text: "👋 Welcome", link: "/guides/beginning/start" },
              {
                text: "☁️ Cloudflare Proxy",
                link: "/guides/cloudflare",
              },
              {
                text: "💾 qBittorent Setup",
                link: "/guides/downloaders/qbittorrent",
              },
            ],
          },
          {
            text: "🪟 Windows",
            collapsed: false,
            items: [
              { text: "🔒 Privacy", link: "/guides/windows/privacy" },
              { text: "🍚 Theming", link: "/guides/windows/ricing" },
              { text: "💽 Bootable USB", link: "/guides/windows/bootableUSB" },
              { text: "🔧 Tweaks", link: "/guides/windows/tweaks" },
              { text: "📊 Telemetry", link: "/guides/windows/telemetry" },
            ],
          },
          {
            text: "🔽 Downloaders",
            items: [
              {
                text: "⬇️ IDM",
                link: "/guides/downloaders/idm",
              },
              {
                text: "⬇️ JDownloader2",
                link: "/guides/downloaders/jdownloader2",
              },
            ],
          },
          {
            text: "📱 Android",
            items: [{ text: "🔧 Revanced", link: "/guides/android/revanced" }],
          },
          {
            text: " 🛠️ Utils",
            collapsed: false,
            items: [
              { text: "🗂️ WinRAR", link: "/guides/utils/winrar" },
              {
                text: "🆓 Unlimited Trials",
                link: "/guides/trials",
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
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/016622/wiki" },
      { icon: "discord", link: "https://discord.gg/jqruB4FJJ5" },
      {
        icon: {
          svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286A.72.72 0 0 0 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0m4.388 3.199a1.999 1.999 0 1 1-1.947 2.46v.002a2.37 2.37 0 0 0-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363a2.802 2.802 0 1 1 2.908 4.753c-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87a2.8 2.8 0 0 1 1.189-5.34c.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01a3.23 3.23 0 0 1 2.88-3.207 2 2 0 0 1 1.959-1.595m-8.085 8.376c-.784 0-1.459.78-1.506 1.797s.64 1.429 1.426 1.429 1.371-.369 1.418-1.385-.553-1.841-1.338-1.841m7.406 0c-.786 0-1.385.824-1.338 1.841s.634 1.385 1.418 1.385c.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797m-3.703 4.013c-.974 0-1.907.048-2.77.135a.222.222 0 0 0-.183.305 3.2 3.2 0 0 0 2.953 1.964 3.2 3.2 0 0 0 2.953-1.964.222.222 0 0 0-.184-.305 28 28 0 0 0-2.769-.135"/></svg>`,
        },
        link: "https://reddit.com/r/016622",
        ariaLabel: "Reddit",
      },
    ],
  },
});
 