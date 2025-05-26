export type LaunchPadStatus =
  | 'active'
  | 'inactive'
  | 'unknown'
  | 'retired'
  | 'lost'
  | 'under construction';

export interface ILaunchPad {
  name: string | null;
  full_name: string | null;
  status: LaunchPadStatus;
  type: string | null;
  locality: string | null;
  region: string | null;
  latitude: number | null;
  longitude: number | null;
  landing_attempts: number;
  landing_successes: number;
  wikipedia: string | null;
  details: string | null;
  launches: string[];
  images?: {
    large: string[]
  }
  id: string
}
