import {Chapter, CourseById, Platform} from "./apiInterfaces.ts";

export interface IPlatformStore {
    platform: Platform,
    setPlatform: (platform: Platform) => void,
}

export interface IPlayerCoursePreviewStore {
    course: CourseById,
    currentChapter: Chapter,
    setCourse: (course: CourseById) => void,
    setcurrentChapter: (chapter: Chapter) => void,
}