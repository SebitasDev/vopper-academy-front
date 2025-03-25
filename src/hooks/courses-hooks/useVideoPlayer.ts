import {useVideoPlayerStore} from "../../store/Courses/VideoPlayerStore.ts";
import {getCourseByIdActions} from "../../actions/courses/getCourseById.actions.ts";
import {useNavigate} from "@tanstack/react-router";

export const useVideoPlayer = () => {

    const navigate = useNavigate();

    const { course, setCourse } = useVideoPlayerStore()

    const viewCourse = async (id: string) => {
        const course = await getCourseByIdActions(id);
        if(course != null) {
            setCourse(course);
            await navigate({ to: `/cursos/${id}` })
        }
    }

    return {
        viewCourse,
        course
    }
}

