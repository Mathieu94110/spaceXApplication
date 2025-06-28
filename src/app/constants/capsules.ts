import { InjectionToken } from "@angular/core";
import { ICapsule } from "interfaces/capsules";

export const CAPSULE_INFO_TOKEN = new InjectionToken<ICapsule>('capsuleInfo');