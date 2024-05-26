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
			{ text: "Start here", link: "/guides/start" },
		],

		sidebar: [
			{
				text: "Safety",
				items: [
					{ text: "🏁 Start", link: "/guides/start" },
					{ text: "☁️ Cloudflare Proxy", link: "/guides/cloudflare" },
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
			{ icon: "github", link: "https://github.com/jbugel-lol/016622" },
			{ icon: "discord", link: "https://discord.gg/jqruB4FJJ5" },
		],
	},
});
