import type { Trip } from "../models/Trip.ts";

interface CardProps {
  trip: Trip;
}

export default function TripCard({ trip }: CardProps) {
  const handleTap = () => {
    window.location.href = `/routes/${trip.id}/`;
  };

  const getTotalDistance = () => {
    const calculatedDistance = trip.routes.map((route) => {
      return parseFloat(`${route.length}`);
    });

    let totalDistance = calculatedDistance.reduce((a, b) => a + b, 0);

    totalDistance = +totalDistance.toFixed(2);

    return totalDistance;
  };

  const getTotalTime = () => {
    const calculatedTime = trip.routes.map((route) => {
      const [hours, minutes] = route.time.split(":").map(Number);
      return hours + minutes / 60;
    });

    let totalTime = calculatedTime.reduce((a, b) => a + b, 0);

    totalTime = +totalTime.toFixed(2);

    return totalTime;
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
            {trip.from_city} a {trip.to_city}
          </div>
          <p className="mt-2 text-gray-500">
            {new Date(trip.from_city_date).toLocaleString()} -{" "}
            {new Date(trip.to_city_date).toLocaleString()}
          </p>

          <p className="text-orange-500 font-bold text-4xl">
            {getTotalTime()} Horas
          </p>
        </div>

        <div>
          <p className="text-4xl font-bold">{getTransport()}</p>
          <p>{getTotalDistance()} KM</p>
          <p className="text-orange-500 font-bold text-4xl">
            ${trip.total_cost} MXN
          </p>
        </div>
      </div>
    </button>
  );
}
