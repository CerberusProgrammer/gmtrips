import type { Vehicle } from "./Vehicle";

export interface Stand {
  id: number;
  name: string;
  vehicles: Vehicle[];
}
