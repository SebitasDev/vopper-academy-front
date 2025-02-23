import {Home} from "@mui/icons-material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import {List, Box, useMediaQuery, useTheme} from "@mui/material";
import OptionMenu from "../atoms/OptionMenu.tsx";

const GroupOptionsInMenu = () => {

    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("sm"));

    return (
        <>
            { isMobile ?
                (
                    <>
                        <Box
                            sx={{
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                gap: 2,
                                backgroundColor: "rgba(0, 0, 0, 0.8)", // Fondo oscuro semi-transparente
                                padding: "12px 0",

                                [themeMUI.breakpoints.down("sm")]: {
                                    gap: "0px",
                                },
                            }}
                        >
                            {[
                                { name: "Inicio", icon: <Home sx={{ color: "white" }} /> },
                                { name: "Plataformas", icon: <ViewInArIcon sx={{ color: "white" }} /> },
                                { name: "Cursos", icon: <VideoLibraryIcon sx={{ color: "white" }} /> },
                                { name: "Categorías", icon: <FolderCopyIcon sx={{ color: "white" }} /> },
                            ].map(({ name, icon }) => (
                                <OptionMenu key={name} name={name} icon={icon} />
                            ))}
                        </Box>
                    </>
                ) : (
                        <List sx={{ width: 190 }}>
                            {[
                                { name: "Inicio", icon: <Home sx={{color: "white"}}/> },
                                { name: "Plataformas", icon: <ViewInArIcon sx={{color: "white"}}/> },
                                { name: "Cursos", icon: <VideoLibraryIcon sx={{color: "white"}}/> },
                                { name: "Categorias", icon: <FolderCopyIcon sx={{color: "white"}}/> },
                            ].map(({ name, icon }) => (
                                <OptionMenu name={name} icon={icon}/>
                            ))}
                        </List>
                )}
        </>
    )
}

export default GroupOptionsInMenu;