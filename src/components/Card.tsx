import { useState } from "react";
import type { Trip } from "../models/Trip.ts";

interface CardProps {
  trip: Trip;
}

export default function Card({ trip }: CardProps) {
  const handleTap = () => {
    console.log("Hola!");
  };

  const getTotalDistance = () => {
    const calculatedDistance = trip.routes.map((route) => {
      return route.length;
    });

    let totalDistance = calculatedDistance.reduce((a, b) => a + b, 0);

    return totalDistance;
  };

  const getTotalTime = () => {
    const calculatedTime = trip.routes.map((route) => {
      return route.time;
    });

    let totalTime = calculatedTime.reduce((a, b) => a + b, 0);

    return totalTime;
  };

  const getTotalCost = () => {
    let totalCost = trip.routes.reduce((total, route) => {
      if (route.stand) {
        let standCost = route.stand.vehicles.reduce(
          (total, vehicle) => total + vehicle.cost,
          0
        );
        return total + standCost;
      } else {
        return total;
      }
    }, 0);

    return totalCost;
  };

  const getTransport = () => {
    for (let route of trip.routes) {
      if (route.stand) {
        for (let vehicle of route.stand.vehicles) {
          if (vehicle.name) {
            return vehicle.name;
          }
        }
      }
    }
    return "Sin vehiculo";
  };

  return (
    <button
      className=" bg-white rounded-xl w-full shadow-sm transform active:scale-90 transition duration-150 text-center"
      onClick={() => handleTap()}
    >
      <div className="p-8 md:grid grid-cols-2">
        <div>
          <div className=" tracking-wide text-4xl text-gray-900 font-bold">
            {trip.fromCity} a {trip.toCity}
          </div>
          <p className="mt-2 text-gray-500">
            {trip.fromCityDate} - {trip.toCityDate}
          </p>
          <p className="text-orange-500 font-bold text-4xl">
            {getTotalTime()} Horas
          </p>
        </div>

        <div>
          <p className="text-4xl font-bold">{getTransport()}</p>
          <p>{getTotalDistance()} KM</p>
          <p className="text-orange-500 font-bold text-4xl">
            ${getTotalCost()} MXN
          </p>
        </div>
      </div>
    </button>
  );
}
