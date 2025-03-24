import {CourseByPlatform, ResponseApi} from "../../interfaces/apiInterfaces.ts";
import axios from "axios";

const URL_BASE = "https://back-flqu.onrender.com/api"

export const getCoursesByPlatform = async (platformId: string): Promise<ResponseApi<CourseByPlatform>> => {
    try {
        
        const response = await axios
            .get<ResponseApi<CourseByPlatform>>(`${URL_BASE}/courses/platform/${platformId}`)

        if(response.data.success) {
            console.log('Cursos obtenidos:', response.data);
            return response.data;
        } else{
            console.error('Error al obtener los cursos:', response.data.errorMessage);
            return {
                data: { filterCourses: [] },
                success: false,
                errorMessage: response.data.errorMessage,
                statusCode: response.data.statusCode,
            };
        }

    } catch (error) {
        console.error('Hubo un error en la solicitud:', error);

        return {
            data: { filterCourses: [] },
            success: false,
            errorMessage: "Estamos trabajando en ello, por favor intenta más tarde.",
            statusCode: 500,
        };
    }
}