import DefaultTheme from "vitepress/theme";
import { EnhanceAppContext } from "vitepress";
import "./var.less";
import "./index.less";
import "./font.less";

export default {
  ...DefaultTheme,

  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
  },
};
