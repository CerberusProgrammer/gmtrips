import { useEffect, useState } from "react";
import Dialog from "../util/Dialog";
import { domain } from "../../domain";
import CircularLoader from "../util/CircularLoader";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isDialogOpen) {
      (
        document.getElementById("error_dialog") as HTMLDialogElement
      ).showModal();
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
    (document.getElementById("error_dialog") as HTMLDialogElement).close();
  };

  const handleRegister = async () => {
    if (!username || !password) {
      setErrorMessage("Por favor, introduce tu usuario y contraseña.");
      setIsDialogOpen(true);
      return;
    }

    setLoading(true);

    const response = await fetch(`${domain}/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    setLoading(false);

    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", username);
      window.location.href = "/";
    } else {
      setErrorMessage(data.username[0]);
      setIsDialogOpen(true);
    }
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return loading ? (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-sm w-96">
        <p className="w-full font-bold text-4xl text-center mb-8">GMTrips</p>
        <div className="w-full flex justify-center">
          <CircularLoader></CircularLoader>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-sm w-96">
        <p className="w-full font-bold text-4xl text-center mb-8">GMTrips</p>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-md mb-4 font-medium text-lg border-2 border-gray-200"
        />
        <input
          type="password"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-md mb-4 font-medium text-lg border-2 border-gray-200"
        />
        <button
          className="btn btn-ghost w-full text-base font-bold py-2 rounded-xl mb-2 bg-orange-500 text-white hover:bg-orange-600 transform active:scale-90 transition duration-150"
          onClick={() => handleRegister()}
        >
          Registrarse
        </button>
        <button
          className="btn btn-ghost w-full bg-orange-100 text-orange-500 text-base font-bold py-2 rounded-xl mb-2 hover:bg-orange-200 transform active:scale-90 transition duration-150"
          onClick={() => handleLogin()}
        >
          Iniciar sesión
        </button>
        {isDialogOpen && (
          <Dialog
            title="Error"
            message={errorMessage}
            onClick={handleCloseDialog}
          ></Dialog>
        )}
      </div>
    </div>
  );
}
