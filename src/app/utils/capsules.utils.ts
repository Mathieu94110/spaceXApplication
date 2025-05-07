import { EMPTY_RESOURCE } from '@app/constants';
import { IRessource } from 'interfaces';
import { ICapsule } from 'interfaces/capsules';

export function patchCapsuleResource(
  patch: Partial<IRessource<ICapsule>>,
  current: IRessource<ICapsule> | undefined
): IRessource<ICapsule> {
  return {
    ...(current ?? EMPTY_RESOURCE),
    ...patch
  };
}