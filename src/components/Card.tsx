import React from "react";
import type { Trip } from "../models/Trip.ts";

interface CardProps {
  trip: Trip;
}

export default function Card({ trip }: CardProps) {
  return (
    <>
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Total Page Views</div>
          <div class="stat-value">
            {trip.fromCity} - {trip.toCity}
          </div>
          <div class="stat-desc">21% more than last month</div>
        </div>
      </div>{" "}
    </>
  );
}
