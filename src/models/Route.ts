import type { Stand } from "./Stand";

export interface Route {
  name: string;
  state: string;
  road: string;
  length: number;
  time: string;
  stand?: Stand;
}
