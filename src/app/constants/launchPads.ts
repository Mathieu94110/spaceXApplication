import { InjectionToken } from "@angular/core";
import { ILaunchPad } from "interfaces/launch-pads";

export const LAUNCH_PAD_INFO_TOKEN = new InjectionToken<ILaunchPad>('launchPadInfo');
