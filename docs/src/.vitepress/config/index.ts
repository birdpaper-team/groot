import { nav } from "./nav";
import { sidebar } from "./sidebar";

const config: import("vitepress").UserConfig = {
  title: "Groot",
  titleTemplate: "A front-end buried monitoring plug-in",
  description: "A front-end buried monitoring plug-in",
  lastUpdated: false,
  cleanUrls: true,
  appearance: false,
  themeConfig: {
    nav,
    siteTitle: "Groot",
    outlineTitle: "大纲",
    outline: "deep",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/birdpaper-team/groot" }],
    sidebar,
  },
};

export default config;
