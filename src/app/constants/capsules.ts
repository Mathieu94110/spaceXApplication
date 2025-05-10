import { InjectionToken } from "@angular/core";
import { capsuleStatus, ICapsule } from "interfaces/capsules";

export const STATUS_CLASS_MAP: Record<capsuleStatus, string> = {
  retired: 'color-blue',
  unknown: 'color-neutral',
  destroyed: 'color-error',
  active: 'color-success'
};

export const DEFAULT_CAPSULE_LIMIT = 8;
export const CAPSULE_INFO_TOKEN = new InjectionToken<ICapsule>('capsuleInfo');