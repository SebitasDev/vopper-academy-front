import {create} from "zustand/react";
import {devtools} from "zustand/middleware";
import {IPlayerCoursePreviewStore} from "../../interfaces/store.interfaces.ts";
import {CourseById} from "../../interfaces/apiInterfaces.ts";

export const useVideoPlayerStore = create<IPlayerCoursePreviewStore>()(
    devtools((setState) => ({
        course: {},
        currentChapter: {},
        setCourse: (c: CourseById) => setState({ course: c }),
        setcurrentChapter: (ch) => setState({ currentChapter: ch }),
    }))
)