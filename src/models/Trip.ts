import type { Route } from "./Route";

export interface Trip {
  fromCity: string;
  toCity: string;
  routes: Route[];
}
