/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_B3iPJJQ-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { F as FilledButton, $ as $$Layout } from './404_C7G2faLN.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { C as CircularLoader, d as domain } from './_id__zG8PJ_x8.mjs';

function TripSelector({ title, onSelect, disabledValue }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
    "select",
    {
      defaultValue: "",
      onChange: handleChange,
      className: "select select-bordered select-lg w-full font-medium text-xl border-2 border-gray-200",
      children: [
        /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: title }),
        /* @__PURE__ */ jsx("option", { disabled: disabledValue === "Mexicali", value: "Mexicali", children: "Mexicali" }),
        /* @__PURE__ */ jsx("option", { disabled: disabledValue === "Rosarito", value: "Rosarito", children: "Rosarito" }),
        /* @__PURE__ */ jsx("option", { disabled: disabledValue === "Tecate", value: "Tecate", children: "Tecate" }),
        /* @__PURE__ */ jsx("option", { disabled: disabledValue === "Tijuana", value: "Tijuana", children: "Tijuana" }),
        /* @__PURE__ */ jsx("option", { disabled: disabledValue === "Ensenada", value: "Ensenada", children: "Ensenada" })
      ]
    }
  ) });
}

function ListCheckbox({ onCheck }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleDivClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onCheck(newCheckedState);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: handleDivClick,
      className: "grid grid-cols-2 bg-white rounded-lg border-2 border-gray-200 px-4 py-4 w-full cursor-pointer",
      children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-xl", children: "¿Aplica viaje redondo?" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            checked: isChecked,
            className: "checkbox justify-self-end",
            readOnly: true
          }
        )
      ]
    }
  );
}

function InputNumber({ title, onInput }) {
  const handleChange = (event) => {
    onInput(event.target.value);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "input",
    {
      onChange: handleChange,
      type: "number",
      placeholder: title,
      className: "input input-bordered px-4 py-8 mt-2 w-full font-medium text-xl border-2 border-gray-200"
    }
  ) });
}

function VehiclesSelector({ title, onSelect }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "select",
    {
      defaultValue: "",
      name: "vehiculos",
      onChange: handleChange,
      className: "select select-bordered select-lg w-full mt-2 font-medium text-xl border-2 border-gray-200",
      children: [
        /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: title }),
        /* @__PURE__ */ jsx("option", { value: "Automóviles", children: "Automóviles" }),
        /* @__PURE__ */ jsx("option", { value: "Autobuses", children: "Autobuses" }),
        /* @__PURE__ */ jsx("option", { value: "Camiones", children: "Camiones" }),
        /* @__PURE__ */ jsx("option", { value: "Motocicleta", children: "Motocicleta" }),
        /* @__PURE__ */ jsx("option", { value: "Camión 3 ejes", children: "Camión 3 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Camión 4 ejes", children: "Camión 4 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Camión 5 ejes", children: "Camión 5 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Camión 6 ejes", children: "Camión 6 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Camión 7 ejes", children: "Camión 7 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Camión 8 ejes", children: "Camión 8 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Camión 9 ejes", children: "Camión 9 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Automóvil", children: "Automóvil" }),
        /* @__PURE__ */ jsx("option", { value: "Automóvil remolque 1 eje", children: "Automóvil remolque 1 eje" }),
        /* @__PURE__ */ jsx("option", { value: "Automóvil remolque 2 eje", children: "Automóvil remolque 2 eje" }),
        /* @__PURE__ */ jsx("option", { value: "Pick Ups", children: "Pick Ups" }),
        /* @__PURE__ */ jsx("option", { value: "Autobus 2 ejes", children: "Autobus 2 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Autobus 3 ejes", children: "Autobus 3 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Autobus 4 ejes", children: "Autobus 4 ejes" }),
        /* @__PURE__ */ jsx("option", { value: "Camión 2 ejes", children: "Camión 2 ejes" })
      ]
    }
  ) });
}

function FormCreateTrip() {
  const [initialDestination, setInitialDestination] = useState("");
  const [finalDestination, setFinalDestination] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [passengerCount, setPassengerCount] = useState(0);
  const [vehicleType, setVehicleType] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  useEffect(() => {
    let newDestinations = [initialDestination, finalDestination];
    if (isRoundTrip) {
      newDestinations.push(initialDestination);
    }
    setDestinations(newDestinations);
  }, [initialDestination, finalDestination, isRoundTrip]);
  useEffect(() => {
    if (initialDestination && finalDestination && passengerCount > 0 && vehicleType && selectedDate && selectedTime) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [
    initialDestination,
    finalDestination,
    passengerCount,
    vehicleType,
    selectedDate,
    selectedTime
  ]);
  const handleContinue = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const dateTime = /* @__PURE__ */ new Date(`${selectedDate}T${selectedTime}`);
    const isoDateTime = dateTime.toISOString();
    const response = await fetch(`${domain}/api/trips/generate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify({
        destinations,
        passengers: passengerCount,
        vehicle: vehicleType,
        datetime: isoDateTime
      })
    });
    console.log(
      JSON.stringify({
        destinations,
        passengers: passengerCount,
        vehicle: vehicleType,
        datetime: isoDateTime
      })
    );
    const data = await response.json();
    window.location.href = `/routes/${data["id"]}`;
    setIsLoading(false);
    resetData();
  };
  const resetData = () => {
    setInitialDestination("");
    setFinalDestination("");
    setDestinations([]);
    setIsRoundTrip(false);
    setPassengerCount(0);
    setVehicleType("");
    setSelectedDate("");
    setSelectedTime("");
  };
  return /* @__PURE__ */ jsx(Fragment, { children: isLoading ? /* @__PURE__ */ jsx(CircularLoader, {}) : /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
      /* @__PURE__ */ jsx("div", { className: "pr-2", children: /* @__PURE__ */ jsx(
        TripSelector,
        {
          title: "Destino inicial",
          onSelect: setInitialDestination,
          disabledValue: finalDestination
        }
      ) }),
      /* @__PURE__ */ jsx(
        TripSelector,
        {
          title: "Destino final",
          onSelect: setFinalDestination,
          disabledValue: initialDestination
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2" }),
    /* @__PURE__ */ jsx(ListCheckbox, { onCheck: setIsRoundTrip }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
      /* @__PURE__ */ jsx("div", { className: "pr-2", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "date",
          onChange: (e) => setSelectedDate(e.target.value),
          className: "form-control rounded-lg px-4 py-4 w-full font-medium text-xl border-2 border-gray-200"
        }
      ) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "time",
          onChange: (e) => setSelectedTime(e.target.value),
          className: "form-control rounded-lg px-4 py-4 w-full font-medium text-xl border-2 border-gray-200"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      InputNumber,
      {
        title: "Cantidad de pasajeros",
        onInput: setPassengerCount
      }
    ),
    /* @__PURE__ */ jsx(
      VehiclesSelector,
      {
        title: "Tipo de vehiculo",
        onSelect: setVehicleType
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx(
        FilledButton,
        {
          title: "Generar",
          enabled: isButtonEnabled,
          onTap: handleContinue
        }
      )
    ] })
  ] }) });
}

const $$Astro = createAstro();
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nueva ruta" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center h-full"> ${renderComponent($$result2, "FormCreateTrip", FormCreateTrip, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/projects/prueba/gmtrips/src/components/FormCreateTrip", "client:component-export": "default" })} </div> ` })}`;
}, "D:/projects/prueba/gmtrips/src/pages/routes/create.astro", void 0);

const $$file = "D:/projects/prueba/gmtrips/src/pages/routes/create.astro";
const $$url = "/routes/create";

export { $$Create as default, $$file as file, $$url as url };
