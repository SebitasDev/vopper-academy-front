import {Platform} from "./apiInterfaces.ts";

export interface IPlatformStore {
    platform: Platform,
    setPlatform: (platform: Platform) => void,
}