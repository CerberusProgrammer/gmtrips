import React, { useState, useEffect } from "react";
import { domain } from "../domain";
import CircularLoader from "./CircularLoader";

export default function Trip({ id }) {
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState(null);

  const getTrip = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${domain}/api/trips/${id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTrip(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getTrip();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : trip ? (
        <div>
          <h1>Viaje ID: {trip.id}</h1>
          <h2>
            Desde: {trip.from_city} - Hasta: {trip.to_city}
          </h2>
          <h3>Costo total: {trip.total_cost}</h3>
          <h3>Costo de gasolina: {trip.gasoline_cost}</h3>
          <h3>Costo de viaje: {trip.travel_cost}</h3>
          <div>
            <h2>Rutas:</h2>
            {trip.routes.map((route) => (
              <div key={route.id}>
                <h3>Nombre: {route.name}</h3>
                <p>Longitud: {route.length}</p>
                <p>Tiempo: {route.time}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <CircularLoader></CircularLoader>
      )}
    </div>
  );
}
