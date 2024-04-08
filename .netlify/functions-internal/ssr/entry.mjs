import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Mxin-OyR.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DzgchYv4.mjs');
const _page1 = () => import('./chunks/404_D4glVGV8.mjs');
const _page2 = () => import('./chunks/login_kLQuJpl8.mjs');
const _page3 = () => import('./chunks/register_CteYEWyG.mjs');
const _page4 = () => import('./chunks/create_K1LiTTmn.mjs');
const _page5 = () => import('./chunks/_id__DOzuq6uC.mjs');
const _page6 = () => import('./chunks/index_D4haHtDi.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/login.astro", _page2],
    ["src/pages/register.astro", _page3],
    ["src/pages/routes/create.astro", _page4],
    ["src/pages/routes/[id].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "7d8c6692-2da9-4e3d-a1f6-3e3948c60dd7"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
