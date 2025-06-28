import { InjectionToken } from "@angular/core";
import { IDragon } from "interfaces/dragons";

export const DRAGON_INFO_TOKEN = new InjectionToken<IDragon>('dragonInfo');