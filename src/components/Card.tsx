import type { Trip } from "../models/Trip.ts";

interface CardProps {
  trip: Trip;
}

export default function Card({ trip }: CardProps) {
  return (
    <>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">
            {trip.fromCity} - {trip.toCity}
          </div>
          <div className="stat-desc">
            {trip.routes.map((route) => (
              <p>{route.name}</p>
            ))}
          </div>
        </div>
      </div>{" "}
    </>
  );
}
