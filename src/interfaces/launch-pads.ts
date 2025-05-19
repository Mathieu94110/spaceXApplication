export type LaunchPadStatus =
  | 'active'
  | 'inactive'
  | 'unknown'
  | 'retired'
  | 'lost'
  | 'under construction';

type ILaunchPadImg = {
  large: string[]
}

export interface ILaunchPad {
  name: string | null;
  full_name: string | null;
  status: LaunchPadStatus;
  locality: string | null;
  region: string | null;
  timezone: string | null;
  latitude: number | null;
  longitude: number | null;
  launch_attempts: number;
  launch_successes: number;
  rockets: string[];
  launches: string[];
  images: ILaunchPadImg;
  id: string
}
