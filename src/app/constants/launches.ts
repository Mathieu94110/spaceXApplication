import { InjectionToken } from "@angular/core";
import { ILaunch } from "interfaces/launches";

export const LAUNCH_INFO_TOKEN = new InjectionToken<ILaunch>('launchInfo');