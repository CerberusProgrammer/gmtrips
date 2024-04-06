import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Iniciando...");
  };

  const handleRegister = () => {
    console.log("Registrando...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-sm w-96">
        <p className="w-full font-bold text-4xl text-center mb-8">GMTrips</p>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="password"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-6"
        />
        <button
          className="w-full bg-orange-500 text-white font-bold py-2 rounded-md mb-2 hover:bg-orange-600 transform active:scale-90 transition duration-150"
          onClick={() => handleLogin()}
        >
          Iniciar sesión
        </button>

        <button
          className="w-full bg-orange-100 text-orange-500 font-bold py-2 rounded-md hover:bg-orange-200 transform active:scale-90 transition duration-150"
          onClick={() => handleRegister()}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}
