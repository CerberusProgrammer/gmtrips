export default function Logout() {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <button onClick={logout} className="text-sm text-opacity-5">
      Cerrar
    </button>
  );
}
