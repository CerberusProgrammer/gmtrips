import { useEffect, useState } from "react";
import CircularLoader from "../util/CircularLoader";

export default function IsAuthenticated({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <CircularLoader></CircularLoader>;
  } else {
    return <>{children}</>;
  }
}
