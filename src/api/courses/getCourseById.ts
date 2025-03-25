import {CourseById, ResponseApi} from "../../interfaces/apiInterfaces.ts";
import axios from "axios";

const URL_BASE = "https://back-flqu.onrender.com/api"

export const getCourseById = async (id: string) : Promise<ResponseApi<CourseById | null>> => {
    try {
        const response = await axios
            .get<ResponseApi<CourseById>>(`${URL_BASE}/courses/${id}`);

        if(response.data.success) {
            console.log("Curso obtenido", response.data.data);
            return response.data;
        } else {
            console.error('Error al obtener el curso:', response.data.errorMessage);
            return {
                data: null,
                success: false,
                errorMessage: response.data.errorMessage,
                statusCode: response.data.statusCode,
            };
        }
    } catch (error) {
        console.error('Hubo un error en la solicitud:', error);

        return {
            data: null,
            success: false,
            errorMessage: "Estamos trabajando en ello, por favor intenta más tarde.",
            statusCode: 500,
        };
    }
}