import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'
/** this line goes into your scully.<app>.config.ts */
import 'prismjs/components/prism-java.js';


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "myblog",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};

setPluginConfig('md', { enableSyntaxHighlighting: true });