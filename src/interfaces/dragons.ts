export interface IDragon {
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  first_flight?: string | null;
  heat_shield: {
    material: string;
    size_meters: number;
    temp_degrees?: number;
    dev_partner?: string;
  };
  thrusters: Record<string, any>; // to changed
  launch_payload_mass?: {
    kg?: number;
    lb?: number;
  };
  launch_payload_vol?: {
    cubic_meters?: number;
    cubic_feet?: number;
  };
  return_payload_mass?: {
    kg?: number;
    lb?: number;
  };
  return_payload_vol?: {
    cubic_meters?: number;
    cubic_feet?: number;
  };
  pressurized_capsule?: {
    payload_volume?: {
      cubic_meters?: number;
      cubic_feet?: number;
    };
  };
  trunk?: {
    trunk_volume?: {
      cubic_meters?: number;
      cubic_feet?: number;
    };
    cargo?: {
      solar_array?: number;
      unpressurized_cargo?: boolean;
    };
  };
  height_w_trunk?: {
    meters?: number;
    feet?: number;
  };
  diameter?: {
    meters?: number;
    feet?: number;
  };
  flickr_images?: string[];
  wikipedia?: string;
  description?: string;
}