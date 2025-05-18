import { ILaunch } from "interfaces/launches";

export const mockLaunch: ILaunch = {
  name: 'Falcon 9',
  rocket: 'B1058',
  date_utc: new Date().toISOString(),
  capsules: ['C123'],
  details: 'Test launch',
  success: true,
  flight_number: 0,
  date_unix: 0,
  date_local: "",
  date_precision: "half",
  upcoming: false,
  id: 'sfsdgds'
};