/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_B3iPJJQ-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$Layout } from './404_C7G2faLN.mjs';

const domain = "https://gmt-api.onrender.com";

function CircularLoader() {
  return /* @__PURE__ */ jsx("span", { className: "loading loading-spinner loading-lg bg-orange-500 w" });
}

function RouteCarousel({ routes }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const goNext = () => {
    setActiveIndex((activeIndex + 1) % routes.length);
  };
  const goPrev = () => {
    setActiveIndex((activeIndex - 1 + routes.length) % routes.length);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
    routes.map((route, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute w-full transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg px-16 py-4 text-xl font-bold", children: [
          /* @__PURE__ */ jsx("p", { children: route.name }),
          /* @__PURE__ */ jsxs("p", { children: [
            route.length,
            " KM"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            route.time,
            " Horas"
          ] }),
          route.stand ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("p", { children: [
            route.stand.name,
            " $",
            route.stand.vehicles[0].cost,
            " MXN"
          ] }) }) : /* @__PURE__ */ jsx(Fragment, {}),
          /* @__PURE__ */ jsxs("h1", { className: " opacity-50", children: [
            "Ruta #",
            index + 1
          ] })
        ] })
      },
      route.id
    )),
    /* @__PURE__ */ jsx("button", { onClick: goPrev, className: "absolute left-2 top-2 btn btn-circle", children: "❮" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: goNext,
        className: "absolute right-2 top-2 btn btn-circle",
        children: "❯"
      }
    )
  ] });
}

function TripView({ id }) {
  const [trip, setTrip] = useState();
  const [standCost, setstandCost] = useState(0);
  const [transport, setTransport] = useState("");
  const [error, setError] = useState("");
  const getTrip = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${domain}/api/trips/${id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTrip(data);
      const totalCost = data.routes.reduce((total, route) => {
        if (route.stand) {
          const standCost2 = route.stand.vehicles.reduce(
            (total2, vehicle) => total2 + Number(vehicle.cost),
            0
          );
          return total + standCost2;
        }
        return total;
      }, 0);
      setstandCost(parseFloat(totalCost.toFixed(2)));
      for (let route of data.routes) {
        if (route.stand) {
          for (let vehicle of route.stand.vehicles) {
            if (vehicle.name) {
              setTransport(vehicle.name);
            }
          }
        }
      }
    } catch (error2) {
      setError(error2.message);
    }
  };
  useEffect(() => {
    getTrip();
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: error ? /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] }) : trip ? /* @__PURE__ */ jsxs("div", { className: " w-full h-full space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:grid grid-cols-2 space-x-0 md:space-x-2 md:space-y-0 space-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm px-8 py-4", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-5xl text-orange-500", children: trip.from_city }),
        /* @__PURE__ */ jsxs("p", { className: "font-bold text-xl opacity-80", children: [
          new Date(trip.from_city_date).toLocaleString(),
          " "
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-lg opacity-50", children: "Salida" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm px-8 py-4", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-5xl text-orange-500", children: trip.to_city }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-xl opacity-80", children: new Date(trip.to_city_date).toLocaleString() }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-lg opacity-50", children: "Llegada" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 space-x-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm px-8 py-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-bold text-xl ", children: [
          "$",
          trip.travel_cost,
          " MXN"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-lg opacity-50", children: "Viaticos" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm px-8 py-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-bold text-xl ", children: [
          "$",
          trip.gasoline_cost,
          " MXN"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-lg opacity-50", children: "Gasolina" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm px-8 py-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-bold text-xl ", children: [
          "$",
          standCost,
          " MXN"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-lg opacity-50", children: "Casetas" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm px-8 py-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "font-bold text-3xl text-orange-500", children: [
        "$",
        trip.total_cost,
        " MXN"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-bold text-lg opacity-50", children: "Costo total" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 space-x-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm px-8 py-4", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-2xl ", children: transport }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-lg opacity-50", children: "Vehiculo" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm px-8 py-4", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-2xl ", children: trip.passengers }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-lg opacity-50", children: "Pasajeros" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(RouteCarousel, { routes: trip.routes })
  ] }) : /* @__PURE__ */ jsx(CircularLoader, {}) });
}

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const numericId = Number(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ruta " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center h-full"> ${renderComponent($$result2, "Trip", TripView, { "id": numericId, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/projects/prueba/gmtrips/src/components/TripView", "client:component-export": "default" })} </div> ` })}`;
}, "D:/projects/prueba/gmtrips/src/pages/routes/[id].astro", void 0);

const $$file = "D:/projects/prueba/gmtrips/src/pages/routes/[id].astro";
const $$url = "/routes/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { CircularLoader as C, _id_ as _, domain as d };
