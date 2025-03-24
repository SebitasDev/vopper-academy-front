import {Course} from "../../interfaces/apiInterfaces.ts";
import {getCoursesByPlatform} from "../../api/courses/getCoursesByPlatform.ts";

export const getCoursesByPlatformActions = async (platformId: string): Promise<Course[]> => {
    const response = await getCoursesByPlatform(platformId);
    return response.data.filterCourses;
}