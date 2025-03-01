import {useTheme} from "@mui/material";
import {useMatchRoute, useNavigate} from "@tanstack/react-router";

export const useOptionMenu = ( name: string ) => {

    const themeMUI = useTheme();
    const matchRoute = useMatchRoute();
    const navigate = useNavigate();

    const route = name === 'Inicio' ? '/' : name.toLowerCase();

    const actualRoute = matchRoute({
        to: route
    });

    const goTo = () => {
        navigate({ to: `/${route}` });
    };


    return {
        themeMUI,
        actualRoute,
        goTo
    }
}