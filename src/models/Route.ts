import type { Stand } from "./Stand";

export interface Route {
  name: string;
  state: string;
  road: string;
  length: number;
  time: number;
  stand?: Stand;
}
