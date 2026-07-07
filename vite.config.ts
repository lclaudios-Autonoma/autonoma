import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const inlineCSS = (): Plugin => ({
  name: 'inline-css',
  apply: 'build',
  enforce: 'post',
  generateBundle(options, bundle) {
    const cssFiles: string[] = [];
    const keys = Object.keys(bundle);
    let htmlFileKey: string | undefined = undefined;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (/\.css$/.test(key)) {
        cssFiles.push(key);
      }
      if (key === 'index.html') {
        htmlFileKey = key;
      }
    }

    const htmlFile = htmlFileKey ? (bundle[htmlFileKey] as any) : null;

    if (htmlFile && cssFiles.length > 0) {
      let html = htmlFile.source as string;
      let combinedCSS = '';

      for (let i = 0; i < cssFiles.length; i++) {
        const cssFile = cssFiles[i];
        const cssAsset = bundle[cssFile] as any;
        if (cssAsset && cssAsset.source) {
          combinedCSS += cssAsset.source;
          delete bundle[cssFile];
        }
      }

      const styleTag = `<style>${combinedCSS}</style>`;
      html = html.replace(/<link[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']+\.css["'][^>]*>/gi, '');
      html = html.replace('</head>', `${styleTag}</head>`);
      htmlFile.source = html;
    }
  }
});

export default defineConfig({
  plugins: [react(), inlineCSS()],
  server: { host: true, port: 5173 },
  build: { outDir: 'dist', sourcemap: false, target: 'es2022' },
});
