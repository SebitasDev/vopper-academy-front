import {Platform} from "../../interfaces/apiInterfaces.ts";
import {getPlatforms} from "../../api/platforms/getPlatforms.ts";

export const getPlatformsActions = async (): Promise<Platform[]> => {
    const response = await getPlatforms();
    return response.data
}