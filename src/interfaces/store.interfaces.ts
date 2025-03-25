import {CourseById, Platform} from "./apiInterfaces.ts";

export interface IPlatformStore {
    platform: Platform,
    setPlatform: (platform: Platform) => void,
}

export interface IPlayerCoursePreview {
    course: CourseById,
    setCourse: (course: CourseById) => void
}