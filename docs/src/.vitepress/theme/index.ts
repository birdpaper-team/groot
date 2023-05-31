import DefaultTheme from "vitepress/theme";
import { EnhanceAppContext } from "vitepress";
import "./var.less";
import "./index.less";
import "./font.less";
import groot from "groot";

const _groot = new groot({
  env: "development",
  debug: true,
  sendConfig: {
    api: "I am groot",
  },
});

export default {
  ...DefaultTheme,

  async enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);

    ctx.app.use(_groot);
  },
};
