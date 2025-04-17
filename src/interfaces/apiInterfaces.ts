export interface ResponseApi<T> {
    data: T,
    success: boolean,
    errorMessage: string | null,
    statusCode: number
}

export interface Platform {
    id: string;
    name: string;
    urlImage: string;
    description: string;
}

export interface Course {
    id: string;
    title: string;
    categories: string[];
    teacher: string;
    imageUrl: string;
}

export interface Chapter {
    chapterId: string;
    title: string;
    duration: string;
    url: string;
    views: number;
    imageUrl: string;
}

export interface CourseById extends Course{
    chapters: Chapter[];
    chaptersCount: number;
    platform: string;
    date: string;
}

export interface CourseByPlatform {
    filterCourses: Course[];
}