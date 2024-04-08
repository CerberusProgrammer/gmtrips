/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as renderHead, g as renderSlot } from '../astro_B3iPJJQ-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function DrawerButton({ title, url }) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: url,
      className: "w-full rounded-xl px-4 py-2 text-start font-bold opacity-50 hover:opacity-80 hover:bg-slate-100 transform active:scale-90 transition duration-150",
      children: title
    }
  );
}

function FilledButton({ title, url, enabled = true, onTap }) {
  const handleClick = (event) => {
    if (enabled && onTap) {
      onTap(event);
    } else if (!enabled) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: url,
      onClick: handleClick,
      className: `btn btn-ghost text-xl w-full font-bold py-2 rounded-xl mb-2 ${enabled ? "bg-orange-500 text-white hover:bg-orange-600 transform active:scale-90 transition duration-150" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
      children: title
    }
  );
}

function Logout() {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };
  return /* @__PURE__ */ jsx("button", { onClick: logout, className: "text-sm text-opacity-5", children: "Cerrar" });
}

function Username() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const username2 = localStorage.getItem("username");
    setUsername(username2);
  }, []);
  return /* @__PURE__ */ jsx("p", { children: username });
}

const $$Astro$2 = createAstro();
const $$Drawer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Drawer;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col h-screen w-96 py-8 px-8 rounded shadow-sm"> <div class="flex mx-auto items-center space-x-4"> <svg width="50" height="50" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M69 34.5C69 53.5538 53.5538 69 34.5 69C15.4462 69 0 53.5538 0 34.5C0 15.4462 15.4462 0 34.5 0C53.5538 0 69 15.4462 69 34.5ZM13.5917 34.5C13.5917 46.0473 22.9527 55.4083 34.5 55.4083C46.0473 55.4083 55.4083 46.0473 55.4083 34.5C55.4083 22.9527 46.0473 13.5917 34.5 13.5917C22.9527 13.5917 13.5917 22.9527 13.5917 34.5Z" fill="#FF9E45"></path> </svg> <h1 class="text-3xl font-bold text-center">GMTrips</h1> </div> <div class="mt-8"></div> <div class="grid grid-cols-1 space-y-2 overflow-auto"> ${renderComponent($$result, "DrawerButton", DrawerButton, { "title": "Inicio", "url": "/" })} </div> <div class="mt-auto grid grid-cols-1 space-y-2"> <div> ${renderComponent($$result, "FilledButton", FilledButton, { "title": "Generar ruta", "url": "/routes/create/", "onTap": () => {
  }, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/projects/prueba/gmtrips/src/components/util/FilledButton", "client:component-export": "default" })} </div> <div class="grid grid-cols-3 items-center"> <div class="col-span-2"> <p class="font-bold opacity-80 text-lg"> ${renderComponent($$result, "Username", Username, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/projects/prueba/gmtrips/src/components/auth/Username", "client:component-export": "default" })} </p> <p class="font-bold opacity-30 text-sm">Administrador</p> </div> <div class="col-span-1"> ${renderComponent($$result, "Logout", Logout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/projects/prueba/gmtrips/src/components/auth/Logout", "client:component-export": "default" })} </div> </div> </div> </div>`;
}, "D:/projects/prueba/gmtrips/src/layouts/Drawer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "GMTrips" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">${renderHead()}</head> <body> <div class="flex h-screen"> ${renderComponent($$result, "Drawer", $$Drawer, {})} <div class="bg-gray-100 py-8 px-8 w-full overflow-auto"> ${renderSlot($$result, $$slots["default"])} </div> </div> </body></html>`;
}, "D:/projects/prueba/gmtrips/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagina no encontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="items-center"></p><p>No deberias estar aqui...</p>  ` })}`;
}, "D:/projects/prueba/gmtrips/src/pages/404.astro", void 0);

const $$file = "D:/projects/prueba/gmtrips/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, FilledButton as F, _404 as _ };
