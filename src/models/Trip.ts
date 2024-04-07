import type { Route } from "./Route";

export interface Trip {
  id: number;
  from_city: string;
  to_city: string;
  from_city_date: Date;
  to_city_date: Date;
  travel_cost: number;
  total_cost: number;
  gasoline_cost: number;
  routes: Route[];
}
