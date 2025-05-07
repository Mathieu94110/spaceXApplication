import { capsuleStatus } from "interfaces/capsules";

export const STATUS_CLASS_MAP: Record<capsuleStatus, string> = {
  retired: 'color-blue',
  unknown: 'color-neutral',
  destroyed: 'color-error',
  active: 'color-success'
};

export const DEFAULT_CAPSULE_LIMIT = 8;