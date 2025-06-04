import { cardStatus } from "interfaces";

export interface ICapsule {
  serial: string,
  status: cardStatus,
  type: string,
  dragon: string,
  reuse_count: number,
  water_landings: number,
  land_landings: number,
  last_update: string | null,
  launches: string,
  id: string
}