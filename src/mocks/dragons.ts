import { IDragon } from "interfaces/dragons";

export const mockDragons: IDragon[] = [
  {
    name: 'Dragon 1',
    type: 'Cargo',
    active: true,
    crew_capacity: 0,
    sidewall_angle_deg: 15,
    orbit_duration_yr: 2,
    dry_mass_kg: 4200,
    dry_mass_lb: 9260,
    first_flight: '2010-12-08',
    heat_shield: {
      material: 'PICA-X',
      size_meters: 3.6,
      temp_degrees: 1600,
      dev_partner: 'NASA'
    },
    thrusters: {
      type: 'Draco',
      amount: 18,
      pods: 4,
      fuel_1: 'N2H4',
      fuel_2: 'NTO',
      thrust: { kN: 0.4 }
    },
    launch_payload_mass: {
      kg: 6000,
      lb: 13228
    },
    launch_payload_vol: {
      cubic_meters: 25,
      cubic_feet: 883
    },
    return_payload_mass: {
      kg: 3000,
      lb: 6614
    },
    return_payload_vol: {
      cubic_meters: 11,
      cubic_feet: 388
    },
    pressurized_capsule: {
      payload_volume: {
        cubic_meters: 10,
        cubic_feet: 353
      }
    },
    trunk: {
      trunk_volume: {
        cubic_meters: 14,
        cubic_feet: 494
      },
      cargo: {
        solar_array: 2,
        unpressurized_cargo: true
      }
    },
    height_w_trunk: {
      meters: 7.2,
      feet: 23.6
    },
    diameter: {
      meters: 3.7,
      feet: 12
    },
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg'
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_Dragon',
    description: 'Dragon is a reusable spacecraft developed by SpaceX.'
  },
  {
    name: 'Dragon 2',
    type: 'Crew',
    active: true,
    crew_capacity: 7,
    sidewall_angle_deg: 10,
    orbit_duration_yr: 5,
    dry_mass_kg: 6400,
    dry_mass_lb: 14110,
    first_flight: '2020-05-30',
    heat_shield: {
      material: 'PICA-X v2',
      size_meters: 3.7,
      temp_degrees: 2000,
      dev_partner: 'NASA'
    },
    thrusters: {
      type: 'SuperDraco',
      amount: 8,
      pods: 4,
      fuel_1: 'N2H4',
      fuel_2: 'NTO',
      thrust: { kN: 73 }
    },
    launch_payload_mass: {
      kg: 6000,
      lb: 13228
    },
    launch_payload_vol: {
      cubic_meters: 25,
      cubic_feet: 883
    },
    return_payload_mass: {
      kg: 3000,
      lb: 6614
    },
    return_payload_vol: {
      cubic_meters: 11,
      cubic_feet: 388
    },
    pressurized_capsule: {
      payload_volume: {
        cubic_meters: 10,
        cubic_feet: 353
      }
    },
    trunk: {
      trunk_volume: {
        cubic_meters: 14,
        cubic_feet: 494
      },
      cargo: {
        solar_array: 2,
        unpressurized_cargo: true
      }
    },
    height_w_trunk: {
      meters: 8.1,
      feet: 26.6
    },
    diameter: {
      meters: 4,
      feet: 13.1
    },
    flickr_images: [
      'https://imgur.com/1.jpg',
      'https://imgur.com/2.jpg'
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Dragon_2',
    description: 'Dragon 2 is the second generation of SpaceX’s Dragon spacecraft.'
  },
  {
    name: 'Dragon XL',
    type: 'Cargo',
    active: false,
    crew_capacity: 0,
    sidewall_angle_deg: 20,
    orbit_duration_yr: 10,
    dry_mass_kg: 9500,
    dry_mass_lb: 20944,
    first_flight: null,
    heat_shield: {
      material: 'PICA-X',
      size_meters: 4.5,
      temp_degrees: 1800,
      dev_partner: 'SpaceX'
    },
    thrusters: {
      type: 'Draco',
      amount: 16,
      pods: 4,
      fuel_1: 'N2H4',
      fuel_2: 'NTO',
      thrust: { kN: 0.4 }
    },
    launch_payload_mass: {
      kg: 8000,
      lb: 17637
    },
    launch_payload_vol: {
      cubic_meters: 30,
      cubic_feet: 1059
    },
    return_payload_mass: {
      kg: 3500,
      lb: 7716
    },
    return_payload_vol: {
      cubic_meters: 12,
      cubic_feet: 424
    },
    pressurized_capsule: {
      payload_volume: {
        cubic_meters: 11,
        cubic_feet: 388
      }
    },
    trunk: {
      trunk_volume: {
        cubic_meters: 16,
        cubic_feet: 565
      },
      cargo: {
        solar_array: 4,
        unpressurized_cargo: false
      }
    },
    height_w_trunk: {
      meters: 9,
      feet: 29.5
    },
    diameter: {
      meters: 4.5,
      feet: 14.8
    },
    flickr_images: [
      'https://imgur.com/dragonxl1.jpg',
      'https://imgur.com/dragonxl2.jpg'
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Dragon_XL',
    description: 'Dragon XL is a planned cargo spacecraft for the Lunar Gateway mission.'
  }
];


export const mockDragon: IDragon = mockDragons[0];