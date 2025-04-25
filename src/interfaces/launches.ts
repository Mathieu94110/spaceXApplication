export interface Failure {
  time?: number;
  altitude?: number;
  reason?: string;
}

export interface Fairings {
  reused?: boolean | null;
  recovery_attempt?: boolean | null;
  recovered?: boolean | null;
  ships?: string[] | number[];
}

export interface CrewMember {
  crew: string | number | null;
  role?: string | null;
}

export interface Core {
  core: string | number | null;
  flight?: number | null;
  gridfins?: boolean | null;
  legs?: boolean | null;
  reused?: boolean | null;
  landing_attempt?: boolean | null;
  landing_success?: boolean | null;
  landing_type?: string | null;
  landpad?: string | number | null;
}

export interface PatchLinks {
  small?: string | null;
  large?: string | null;
}

export interface RedditLinks {
  campaign?: string | null;
  launch?: string | null;
  media?: string | null;
  recovery?: string | null;
}

export interface FlickrLinks {
  small: string[];
  original: string[];
}

export interface Links {
  patch?: PatchLinks;
  reddit?: RedditLinks;
  flickr?: FlickrLinks;
  presskit?: string | null;
  webcast?: string | null;
  youtube_id?: string | null;
  article?: string | null;
  wikipedia?: string | null;
}

export interface ILaunch {
  _id?: string | number;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: 'half' | 'quarter' | 'year' | 'month' | 'day' | 'hour';
  static_fire_date_utc?: string | null;
  static_fire_date_unix?: number | null;
  tbd?: boolean;
  net?: boolean;
  window?: number | null;
  rocket?: string | number | null;
  success?: boolean | null;
  failures?: Failure[];
  upcoming: boolean;
  details?: string | null;
  fairings?: Fairings;
  crew?: CrewMember[];
  ships?: string[] | number[];
  capsules?: string[] | number[];
  payloads?: string[] | number[];
  launchpad?: string | number | null;
  cores?: Core[];
  links?: Links;
  auto_update?: boolean;
  launch_library_id?: string | null;
}