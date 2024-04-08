import { useState, useEffect } from "react";

export default function Username() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");
    setUsername(username);
  }, []);

  return <p>{username}</p>;
}
