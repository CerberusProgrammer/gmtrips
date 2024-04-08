/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderHead, e as renderComponent } from '../astro_B3iPJJQ-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { d as domain } from './_id__zG8PJ_x8.mjs';

function Dialog({ title, message, onClick }) {
  return /* @__PURE__ */ jsx("dialog", { id: "error_dialog", className: "modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-box", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: title }),
    /* @__PURE__ */ jsx("p", { className: "py-4", children: message }),
    /* @__PURE__ */ jsx("div", { className: "modal-action", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "btn btn-ghost w-full bg-orange-100 text-orange-500 text-base font-bold py-2 rounded-xl mb-2 hover:bg-orange-200 transform active:scale-90 transition duration-150",
        onClick,
        children: "Cerrar"
      }
    ) })
  ] }) });
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    if (isDialogOpen) {
      document.getElementById("error_dialog").showModal();
    }
  }, [isDialogOpen]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/";
    }
  }, []);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    document.getElementById("error_dialog").close();
  };
  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage("Por favor, introduce tu usuario y contraseña.");
      setIsDialogOpen(true);
      return;
    }
    const response = await fetch(`${domain}/api-token-auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", username);
      window.location.href = "/";
    } else {
      setErrorMessage(data.non_field_errors[0]);
      setIsDialogOpen(true);
    }
  };
  const handleRegister = () => {
    window.location.href = "/register";
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-10 rounded-lg shadow-sm w-96", children: [
    /* @__PURE__ */ jsx("p", { className: "w-full font-bold text-4xl text-center mb-8", children: "GMTrips" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "Usuario",
        value: username,
        onChange: (e) => setUsername(e.target.value),
        className: "w-full px-4 py-3 rounded-md mb-4 font-medium text-lg border-2 border-gray-200"
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "password",
        value: password,
        placeholder: "Contraseña",
        onChange: (e) => setPassword(e.target.value),
        className: "w-full px-4 py-3 rounded-md mb-4 font-medium text-lg border-2 border-gray-200"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btn btn-ghost w-full text-base font-bold py-2 rounded-xl mb-2 bg-orange-500 text-white hover:bg-orange-600 transform active:scale-90 transition duration-150",
        onClick: () => handleLogin(),
        children: "Iniciar sesión"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btn btn-ghost w-full bg-orange-100 text-orange-500 text-base font-bold py-2 rounded-xl mb-2 hover:bg-orange-200 transform active:scale-90 transition duration-150",
        onClick: () => handleRegister(),
        children: "Registrarse"
      }
    ),
    isDialogOpen && /* @__PURE__ */ jsx(
      Dialog,
      {
        title: "Error",
        message: errorMessage,
        onClick: handleCloseDialog
      }
    )
  ] }) });
}

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>GMTrip</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "LoginForm", LoginForm, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/projects/prueba/gmtrips/src/components/auth/LoginForm.tsx", "client:component-export": "default" })} </body></html>`;
}, "D:/projects/prueba/gmtrips/src/pages/login.astro", void 0);

const $$file = "D:/projects/prueba/gmtrips/src/pages/login.astro";
const $$url = "/login";

const login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Dialog as D, login as l };
