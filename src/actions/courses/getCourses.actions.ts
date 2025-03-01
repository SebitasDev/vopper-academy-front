import {Course} from "../../interfaces/apiInterfaces.ts";
import {getCourses} from "../../api/courses/getCourses.ts";

export const getCoursesActions = async () : Promise<Course[]> => {
    const response = await getCourses();
    return response.data
}