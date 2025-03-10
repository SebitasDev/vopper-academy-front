import {useQuery} from "@tanstack/react-query";
import {getCoursesActions} from "../../actions/courses/getCourses.actions.ts";

const useRecentCourses = () => {

    const recentCoursesQuery = useQuery({
        queryKey: ['courses'],
        queryFn: () => getCoursesActions()
    })

    const lastCourses = recentCoursesQuery.data?.slice(0, 7)

    return {
        recentCoursesQuery,
        lastCourses
    }
}

export default useRecentCourses