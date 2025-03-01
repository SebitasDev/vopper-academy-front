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
    imgaeUrl: string;
}