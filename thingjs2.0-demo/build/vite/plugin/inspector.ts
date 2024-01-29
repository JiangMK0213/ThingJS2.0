/**
 * A vite plugin which provides the ability that to jump to the local IDE when you click the element of browser automatically.
 * https://github.com/webfansplz/vite-plugin-vue-inspector
 */
import type { Plugin } from 'vite';
import Inspector from 'vite-plugin-vue-inspector';

export function configInspectorPlugin(): Plugin {
    return Inspector({
        vue: 2
    }) as Plugin;
}
