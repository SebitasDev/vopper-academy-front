import {useVideoPlayerStore} from "../../store/Courses/VideoPlayerStore.ts";
import {getCourseByIdActions} from "../../actions/courses/getCourseById.actions.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import {Chapter} from "../../interfaces/apiInterfaces.ts";
import {useState} from "react";

export const useVideoPlayer = () => {

    const [onClickInChapter, setClickInChapter] = useState<boolean>(false);

    const navigate = useNavigate();
    const location = useLocation();

    const { course, setCourse, setcurrentChapter, currentChapter } = useVideoPlayerStore()

    const viewCourse = async (id: string) => {
        const course = await getCourseByIdActions(id);
        if(course != null) {
            setCourse(course);
            setcurrentChapter(course.chapters[0]) //Capitulo por defecto
            await navigate({ to: `/cursos/${id}` })
        }
    }

    const setChapterToView = (chapter: Chapter) => {
        if (chapter) {
            setcurrentChapter(chapter);
        }
    }

    const shareCourse = async () => {
        const urlPath = location.pathname;
        const urlBase = window.location.origin
        await navigator.clipboard.writeText(`${urlBase}${urlPath}`);
    }

    return {
        viewCourse,
        course,
        currentChapter,
        setChapterToView,
        shareCourse,
        onClickInChapter,
        setClickInChapter
    }
}