export type capsuleStatus = 'retired' | 'unknown' | 'destroyed' | 'active'

export const statusClassMap: Record<capsuleStatus, string> = {
  retired: 'color-blue',
  unknown: 'color-neutral',
  destroyed: 'color-error',
  active: 'color-success'
};