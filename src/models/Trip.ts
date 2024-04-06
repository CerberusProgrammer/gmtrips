import type { Route } from "./Route";

export interface Trip {
  fromCity: string;
  toCity: string;
  fromCityDate: string;
  toCityDate: string;
  routes: Route[];
}
