import { ICapsule } from 'interfaces/capsules';
export const mockCapsules: ICapsule[] = [
  {
    serial: 'C101',
    status: "active",
    type: 'Dragon 1.0',
    dragon: 'dragon1',
    reuse_count: 2,
    water_landings: 3,
    land_landings: 0,
    last_update: 'Reused for CRS-5 mission',
    launches: '5eb87cd9ffd86e000604b32a',
    id: '5e9e2c5bf35918ed873b2664'
  },
  {
    serial: 'C102',
    status: "unknown",
    type: 'Dragon 1.1',
    dragon: 'dragon1',
    reuse_count: 1,
    water_landings: 1,
    land_landings: 0,
    last_update: 'Retired after successful mission',
    launches: '5eb87cdcffd86e000604b330',
    id: '5e9e2c5bf35918ed873b2665'
  },
  {
    serial: 'C103',
    status: "active",
    type: 'Dragon 2',
    dragon: 'dragon2',
    reuse_count: 0,
    water_landings: 0,
    land_landings: 0,
    last_update: null,
    launches: '5eb87cdaffd86e000604b32e',
    id: '5e9e2c5bf35918ed873b2666'
  },
  {
    serial: 'C104',
    status: "unknown",
    type: 'Dragon 2.1',
    dragon: 'dragon2',
    reuse_count: 2,
    water_landings: 3,
    land_landings: 0,
    last_update: 'Reused for CRS-6 mission',
    launches: '5eb87cd9ffd86e000604b385',
    id: '5e9e2c5bf35918ed873b2669'
  },
];

export const mockCapsule: ICapsule = mockCapsules[0];
