import {create} from "zustand/react";
import {devtools} from "zustand/middleware";
import {IPlayerCoursePreview} from "../../interfaces/store.interfaces.ts";
import {CourseById} from "../../interfaces/apiInterfaces.ts";

export const useVideoPlayerStore = create<IPlayerCoursePreview>()(
    devtools((setState) => ({

        course: {},

        setCourse: (c: CourseById) => setState({ course: c }),
    }))
)