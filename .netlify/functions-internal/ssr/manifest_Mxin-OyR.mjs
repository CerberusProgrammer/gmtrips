import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_B3iPJJQ-.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D4I6SUhW.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D4I6SUhW.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D4I6SUhW.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D4I6SUhW.css"}],"routeData":{"route":"/routes/create","isIndex":false,"type":"page","pattern":"^\\/routes\\/create\\/?$","segments":[[{"content":"routes","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/routes/create.astro","pathname":"/routes/create","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D4I6SUhW.css"}],"routeData":{"route":"/routes/[id]","isIndex":false,"type":"page","pattern":"^\\/routes\\/([^/]+?)\\/?$","segments":[[{"content":"routes","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/routes/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D4I6SUhW.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/projects/prueba/gmtrips/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/projects/prueba/gmtrips/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/projects/prueba/gmtrips/src/pages/routes/[id].astro",{"propagation":"none","containsHead":true}],["D:/projects/prueba/gmtrips/src/pages/routes/create.astro",{"propagation":"none","containsHead":true}],["D:/projects/prueba/gmtrips/src/pages/login.astro",{"propagation":"none","containsHead":true}],["D:/projects/prueba/gmtrips/src/pages/register.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/routes/create.astro":"chunks/pages/create_cXcSefNQ.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_C4kBrprx.mjs","/src/pages/index.astro":"chunks/pages/index_Dw3W2GJp.mjs","/src/pages/register.astro":"chunks/pages/register_DTqTihbt.mjs","\u0000@astrojs-manifest":"manifest_Mxin-OyR.mjs","D:/projects/prueba/gmtrips/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DzgchYv4.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_D4glVGV8.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login_kLQuJpl8.mjs","\u0000@astro-page:src/pages/register@_@astro":"chunks/register_CteYEWyG.mjs","\u0000@astro-page:src/pages/routes/create@_@astro":"chunks/create_K1LiTTmn.mjs","\u0000@astro-page:src/pages/routes/[id]@_@astro":"chunks/_id__DOzuq6uC.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_D4haHtDi.mjs","D:/projects/prueba/gmtrips/src/components/auth/LoginForm.tsx":"_astro/LoginForm.mQhGxYg9.js","D:/projects/prueba/gmtrips/src/components/auth/Username":"_astro/Username.D_hFbwoW.js","D:/projects/prueba/gmtrips/src/components/TripView":"_astro/TripView.DB8qbic-.js","D:/projects/prueba/gmtrips/src/components/auth/RegisterForm":"_astro/RegisterForm.BZ9IkM0f.js","D:/projects/prueba/gmtrips/src/components/auth/Logout":"_astro/Logout.BIM6-W9G.js","D:/projects/prueba/gmtrips/src/components/auth/IsAuthenticated":"_astro/IsAuthenticated.DHOCsVWh.js","D:/projects/prueba/gmtrips/src/components/util/FilledButton":"_astro/FilledButton.DcbQxhz6.js","D:/projects/prueba/gmtrips/src/components/FormCreateTrip":"_astro/FormCreateTrip.UGfn0MzL.js","D:/projects/prueba/gmtrips/src/layouts/MyTrips.tsx":"_astro/MyTrips.B46HKb53.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.D4I6SUhW.css","/favicon.svg","/_astro/CircularLoader.BaWi5KHL.js","/_astro/client.DbokQZWz.js","/_astro/Dialog.tWV0NguF.js","/_astro/domain.B-2vjZUK.js","/_astro/FilledButton.DcbQxhz6.js","/_astro/FormCreateTrip.UGfn0MzL.js","/_astro/index.NEDEFKed.js","/_astro/IsAuthenticated.DHOCsVWh.js","/_astro/jsx-runtime.K1e75nIr.js","/_astro/LoginForm.mQhGxYg9.js","/_astro/Logout.BIM6-W9G.js","/_astro/MyTrips.B46HKb53.js","/_astro/RegisterForm.BZ9IkM0f.js","/_astro/TripView.DB8qbic-.js","/_astro/Username.D_hFbwoW.js"],"buildFormat":"directory"});

export { manifest };
