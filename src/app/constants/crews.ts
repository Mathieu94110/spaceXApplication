import { InjectionToken } from "@angular/core";
import { ICrew } from "interfaces/crew";

export const CREW_INFO_TOKEN = new InjectionToken<ICrew>('crewInfo');