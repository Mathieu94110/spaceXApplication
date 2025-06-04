import { cardStatus } from "interfaces";

export interface ICrew {
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  launches: string[];
  status: cardStatus
  id: string;
}
