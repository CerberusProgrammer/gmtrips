import { useState, useEffect } from "react";
import { domain } from "../domain";
import CircularLoader from "./CircularLoader";
import type { Trip } from "../models/Trip";
import type { Route } from "../models/Route";
import RouteCarousel from "./RouteCarousel";

interface TripViewProps {
  id: number;
}

export default function TripView({ id }: TripViewProps) {
  const [trip, setTrip] = useState<Trip>();
  const [standCost, setstandCost] = useState(0);
  const [transport, setTransport] = useState("");
  const [error, setError] = useState("");

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

      const totalCost = data.routes.reduce((total: number, route: Route) => {
        if (route.stand) {
          const standCost = route.stand.vehicles.reduce(
            (total, vehicle) => total + Number(vehicle.cost),
            0
          );
          return total + standCost;
        }
        return total;
      }, 0);

      setstandCost(parseFloat(totalCost.toFixed(2)));

      for (let route of data.routes) {
        if (route.stand) {
          for (let vehicle of route.stand.vehicles) {
            if (vehicle.name) {
              setTransport(vehicle.name);
            }
          }
        }
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getTrip();
  }, []);

  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : trip ? (
        <div className=" w-full h-full space-y-2">
          <div className="md:grid grid-cols-2 space-x-0 md:space-x-2 md:space-y-0 space-y-2">
            <div className="bg-white rounded-lg shadow-sm px-8 py-4">
              <p className="font-bold text-5xl text-orange-500">
                {trip.from_city}
              </p>
              <p className="font-bold text-xl opacity-80">
                {new Date(trip.from_city_date).toLocaleString()}{" "}
              </p>
              <p className="font-bold text-lg opacity-50">Salida</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm px-8 py-4">
              <p className="font-bold text-5xl text-orange-500">
                {trip.to_city}
              </p>
              <p className="font-bold text-xl opacity-80">
                {new Date(trip.to_city_date).toLocaleString()}
              </p>
              <p className="font-bold text-lg opacity-50">Llegada</p>
            </div>
          </div>
          <div className="grid grid-cols-3 space-x-2">
            <div className="bg-white rounded-lg shadow-sm px-8 py-4">
              <p className="font-bold text-xl ">${trip.travel_cost} MXN</p>
              <p className="font-bold text-lg opacity-50">Viaticos</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm px-8 py-4">
              <p className="font-bold text-xl ">${trip.gasoline_cost} MXN</p>
              <p className="font-bold text-lg opacity-50">Gasolina</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm px-8 py-4">
              <p className="font-bold text-xl ">${standCost} MXN</p>
              <p className="font-bold text-lg opacity-50">Casetas</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm px-8 py-4">
            <p className="font-bold text-3xl text-orange-500">
              ${trip.total_cost} MXN
            </p>
            <p className="font-bold text-lg opacity-50">Costo total</p>
          </div>
          <div className="grid grid-cols-2 space-x-2">
            <div className="bg-white rounded-lg shadow-sm px-8 py-4">
              <p className="font-bold text-2xl ">{transport}</p>
              <p className="font-bold text-lg opacity-50">Vehiculo</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm px-8 py-4">
              <p className="font-bold text-2xl ">{trip.passengers}</p>
              <p className="font-bold text-lg opacity-50">Pasajeros</p>
            </div>
          </div>
          <RouteCarousel routes={trip.routes}></RouteCarousel>
        </div>
      ) : (
        <CircularLoader></CircularLoader>
      )}
    </>
  );
}
