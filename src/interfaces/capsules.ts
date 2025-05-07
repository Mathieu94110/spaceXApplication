export type capsuleStatus = 'retired' | 'unknown' | 'destroyed' | 'active'

export interface ICapsule {
  serial: string,
  status: capsuleStatus,
  type: string,
  dragon: string,
  reuse_count: number,
  water_landings: number,
  land_landings: number,
  last_update: string | null,
  launches: string,
  id: string
}