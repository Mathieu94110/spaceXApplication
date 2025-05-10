import { InjectionToken } from "@angular/core";
import { IDragon } from "interfaces/dragons";

export const DEFAULT_DRAGON_LIMIT = 8;
export const DRAGON_INFO_TOKEN = new InjectionToken<IDragon>('dragonInfo');