import {Box} from "@mui/material";
import GroupOptionsInMenu from "../molecules/GroupOptionsInMenu.tsx";

const Sidebar = () => {

    return (
        <>
            {/* Botón para abrir el Sidebar */}
            <Box
                sx={{
                    width: "13%"
                }}
            >
                <Box
                    component="img"
                    alt="Vopper logo"
                    src="https://i.postimg.cc/NjW7tzCr/da69bef00c4863e8de1f40dd53e5e553.jpg"
                    sx={{
                        width: 50, // o cualquier tamaño que necesites
                        height: "auto",
                        borderRadius: "8px" // Ejemplo de bordes redondeados
                    }}
                />
            </Box>

            <GroupOptionsInMenu/>
        </>
    )
}

export default Sidebar;