import {useQuery} from "@tanstack/react-query";
import {getCoursesByPlatformActions} from "../../actions/courses/getCoursesByPlatform.actions.ts";
import {useParams} from "@tanstack/react-router";

export const useCoursesByPlatform = () => {

    const { id } = useParams({ from: '/plataformas/$id' });

    const coursesByPlatformQuery = useQuery({
        queryKey: ['coursesByPlatform'],
        queryFn: () => getCoursesByPlatformActions(id)
    })

    return {
        coursesByPlatformQuery
    }
}
