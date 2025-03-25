import {CourseById} from "../../interfaces/apiInterfaces.ts";
import {getCourseById} from "../../api/courses/getCourseById.ts";

export const getCourseByIdActions = async (id: string) : Promise<CourseById> => {
    const response = await getCourseById(id)
    return response.data!;
}