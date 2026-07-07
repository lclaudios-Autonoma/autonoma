import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
var inlineCSS = function () { return ({
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle: function (options, bundle) {
        var cssFiles = [];
        var keys = Object.keys(bundle);
        var htmlFileKey = undefined;
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (/\.css$/.test(key)) {
                cssFiles.push(key);
            }
            if (key === 'index.html') {
                htmlFileKey = key;
            }
        }
        var htmlFile = htmlFileKey ? bundle[htmlFileKey] : null;
        if (htmlFile && cssFiles.length > 0) {
            var html = htmlFile.source;
            var combinedCSS = '';
            for (var i = 0; i < cssFiles.length; i++) {
                var cssFile = cssFiles[i];
                var cssAsset = bundle[cssFile];
                if (cssAsset && cssAsset.source) {
                    combinedCSS += cssAsset.source;
                    delete bundle[cssFile];
                }
            }
            var styleTag = "<style>".concat(combinedCSS, "</style>");
            html = html.replace(/<link[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']+\.css["'][^>]*>/gi, '');
            html = html.replace('</head>', "".concat(styleTag, "</head>"));
            htmlFile.source = html;
        }
    }
}); };
export default defineConfig({
    plugins: [react(), inlineCSS()],
    server: { host: true, port: 5173 },
    build: { outDir: 'dist', sourcemap: false, target: 'es2022' },
});
