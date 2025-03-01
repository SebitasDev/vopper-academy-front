import {ResponseApi, Platform} from "../../interfaces/apiInterfaces.ts";
import axios from "axios";

const URL_BASE = "https://back-flqu.onrender.com/api"

export const getPlatforms = async (): Promise<ResponseApi<Platform[]>> => {
    try {
        const response = await axios.
            get<ResponseApi<Platform[]>>(`${URL_BASE}/platforms`);

        if (response.data.success) {
            console.log('Plataformas obtenidas:', response.data.data);
            return response.data;
        } else {
            console.error('Error al obtener las plataformas:', response.data.errorMessage);
            return {
                data: [],
                success: false,
                errorMessage: response.data.errorMessage,
                statusCode: response.data.statusCode,
            };
        }
    } catch (error) {
        console.error('Hubo un error en la solicitud:', error);

        return {
            data: [],
            success: false,
            errorMessage: "Estamos trabajando en ello, por favor intenta más tarde.",
            statusCode: 500,
        };
    }
};
