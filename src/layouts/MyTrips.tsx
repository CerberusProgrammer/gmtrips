import { useState, useEffect } from "react";
import { domain } from "../domain";
import CircularLoader from "../components/CircularLoader";
import type { Trip } from "../models/Trip";
import TripCard from "../components/TripCard";

export default function MyTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [error, setError] = useState("");

  const getTrip = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${domain}/api/trips/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Trip[] = await response.json();
      setTrips(data);
    } catch (error: any) {
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
      ) : trips.length > 0 ? (
        <div className=" space-y-4">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip}></TripCard>
          ))}
        </div>
      ) : (
        <CircularLoader></CircularLoader>
      )}
    </div>
  );
}
