import { defineConfig } from "vitepress";
import { meta } from "./const";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: meta.name,
  description: meta.description,
  titleTemplate: ":title 〣 016622",
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
          svg: `<svg id="Layer_1" enable-background="new 0 0 100 100" height="512" viewBox="0 0 100 100" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_x33_2.Reddit"><path id="Icon_69_" d="m90 50.6c-.2-4.8-4.2-8.6-9.1-8.5-2.2.1-4.2 1-5.7 2.4-6.8-4.7-14.9-7.2-23.2-7.4l3.9-18.7 12.9 2.6c.4 3.3 3.3 5.7 6.6 5.3s5.7-3.3 5.3-6.6-3.3-5.7-6.6-5.3c-1.9.2-3.6 1.3-4.5 2.9l-14.7-2.9c-1-.2-2 .4-2.2 1.4l-4.4 20.9c-8.4.1-16.5 2.7-23.5 7.4-3.5-3.3-9.1-3.2-12.4.4-3.3 3.5-3.2 9.1.4 12.4.7.6 1.5 1.2 2.4 1.6-.1.9-.1 1.8 0 2.6 0 13.5 15.7 24.5 35.1 24.5s35.1-10.9 35.1-24.5c.1-.9.1-1.8 0-2.6 2.8-1.4 4.7-4.5 4.6-7.9zm-60.3 6.1c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm35 16.6c-4.3 3.2-9.5 4.9-14.8 4.6-5.3.2-10.6-1.4-14.8-4.6-.6-.7-.5-1.7.2-2.3.6-.5 1.4-.5 2.1 0 3.6 2.6 8 4 12.5 3.8 4.5.2 8.9-1 12.6-3.7.7-.6 1.7-.6 2.4 0 .6.7.6 1.7 0 2.4v-.2zm-1-10.3c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c.1 3.3-2.4 6.1-5.8 6.2-.1 0-.2 0-.3 0z"/></g></svg>`,
        },
        link: "https://reddit.com/r/016622",
        ariaLabel: "Reddit",
      },
    ],
  },
});
