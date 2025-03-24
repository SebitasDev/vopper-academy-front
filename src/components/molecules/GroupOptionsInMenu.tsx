import {Home} from "@mui/icons-material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import { Box, useTheme} from "@mui/material";
import OptionMenu from "../atoms/OptionMenu.tsx";

const GroupOptionsInMenu = () => {

    const themeMUI = useTheme();



    return (
        <>
            <Box
                sx={{
                    width: 190,
                    marginTop: "15px",

                    [themeMUI.breakpoints.down("sm")]:{
                        padding: 1,
                    }
                }}
            >
                {[
                    { name: "Inicio", icon: <Home sx={{ color: "white" }} /> },
                    { name: "Plataformas", icon: <ViewInArIcon sx={{ color: "white" }} /> },
                    { name: "Cursos", icon: <VideoLibraryIcon sx={{ color: "white" }} /> },
                    { name: "Categorias", icon: <FolderCopyIcon sx={{ color: "white" }} /> }, //Ya se que categorioas va con acento pero no enruta correctamente
                ].map(({ name, icon }) => (
                    <OptionMenu key={name} name={name} icon={icon} />
                ))}
            </Box>
        </>
    )
}

export default GroupOptionsInMenu;