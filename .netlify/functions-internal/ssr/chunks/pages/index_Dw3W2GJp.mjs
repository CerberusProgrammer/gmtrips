/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_B3iPJJQ-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { C as CircularLoader, d as domain } from './_id__zG8PJ_x8.mjs';
import { $ as $$Layout } from './404_C7G2faLN.mjs';

function IsAuthenticated({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    setLoading(false);
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx(CircularLoader, {});
  } else {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
}

function TripCard({ trip }) {
  const handleTap = () => {
    window.location.href = `/routes/${trip.id}/`;
  };
  const getTotalDistance = () => {
    const calculatedDistance = trip.routes.map((route) => {
      return parseFloat(`${route.length}`);
    });
    let totalDistance = calculatedDistance.reduce((a, b) => a + b, 0);
    totalDistance = +totalDistance.toFixed(2);
    return totalDistance;
  };
  const getTotalTime = () => {
    const calculatedTime = trip.routes.map((route) => {
      const [hours, minutes] = route.time.split(":").map(Number);
      return hours + minutes / 60;
    });
    let totalTime = calculatedTime.reduce((a, b) => a + b, 0);
    totalTime = +totalTime.toFixed(2);
    return totalTime;
  };
  const getTransport = () => {
    for (let route of trip.routes) {
      if (route.stand) {
        for (let vehicle of route.stand.vehicles) {
          if (vehicle.name) {
            return vehicle.name;
          }
        }
      }
    }
    return "Sin vehiculo";
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: " bg-white rounded-xl w-full shadow-sm transform active:scale-90 transition duration-150 text-center",
      onClick: () => handleTap(),
      children: /* @__PURE__ */ jsxs("div", { className: "p-8 md:grid grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: " tracking-wide text-4xl text-gray-900 font-bold", children: [
            trip.from_city,
            " a ",
            trip.to_city
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-gray-500", children: [
            new Date(trip.from_city_date).toLocaleString(),
            " -",
            " ",
            new Date(trip.to_city_date).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-orange-500 font-bold text-4xl", children: [
            getTotalTime(),
            " Horas"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold", children: getTransport() }),
          /* @__PURE__ */ jsxs("p", { children: [
            getTotalDistance(),
            " KM"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-orange-500 font-bold text-4xl", children: [
            "$",
            trip.total_cost,
            " MXN"
          ] })
        ] })
      ] })
    }
  );
}

function MyTrips() {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const getTrip = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${domain}/api/trips/`, {
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
      setTrips(data);
    } catch (error2) {
      setError(error2.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTrip();
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: error ? /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] }) : loading ? /* @__PURE__ */ jsx("div", { className: "w-full h-full items-center", children: /* @__PURE__ */ jsx(CircularLoader, {}) }) : trips.length > 0 ? /* @__PURE__ */ jsx("div", { className: " space-y-4", children: trips.map((trip) => /* @__PURE__ */ jsx(TripCard, { trip }, trip.id)) }) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("h1", { className: "text-center font-bold opacity-30 text-2xl", children: "No hay rutas registradas." }) }) });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-2"> ${renderComponent($$result2, "IsAuthenticated", IsAuthenticated, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/projects/prueba/gmtrips/src/components/auth/IsAuthenticated", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "MyTrips", MyTrips, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/projects/prueba/gmtrips/src/layouts/MyTrips.tsx", "client:component-export": "default" })} ` })} </div> ` })}`;
}, "D:/projects/prueba/gmtrips/src/pages/index.astro", void 0);

const $$file = "D:/projects/prueba/gmtrips/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
