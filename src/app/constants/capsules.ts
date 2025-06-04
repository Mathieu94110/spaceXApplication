import { InjectionToken } from "@angular/core";
import { ICapsule } from "interfaces/capsules";

export const DEFAULT_CAPSULE_LIMIT = 8;
export const CAPSULE_INFO_TOKEN = new InjectionToken<ICapsule>('capsuleInfo');