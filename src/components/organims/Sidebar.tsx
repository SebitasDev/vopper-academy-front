import {Box, Drawer, IconButton, useMediaQuery, useTheme} from "@mui/material";
import GroupOptionsInMenu from "../molecules/GroupOptionsInMenu.tsx";
import {useState} from "react";
import {theme} from "../../styles/theme.ts";
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("sm")); // Verifica si es móvil

    // Función para abrir el Drawer
    const toggleDrawer = (open: boolean) => {
        setOpen(open);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "87%",
                }}
            >
                <Box
                    sx={{
                        width: "13%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {isMobile ? (
                        <IconButton
                            sx={{
                                color: "white",
                            }}
                            onClick={() => toggleDrawer(true)}
                        >
                            <MenuIcon sx={{ fontSize: 35 }} />
                        </IconButton>
                    ) : (
                        <Box
                            component="img"
                            alt="Vopper logo"
                            src="https://i.postimg.cc/NjW7tzCr/da69bef00c4863e8de1f40dd53e5e553.jpg"
                            sx={{
                                width: 50,
                                height: "50px"
                            }}
                        />
                    )}
                </Box>
            </Box>
            <>
                {isMobile ? (
                    <>
                        <Drawer
                            anchor="left"
                            open={open}
                            onClose={() => toggleDrawer(false)}
                            sx={{
                                "& .MuiDrawer-paper": {  // Cambia el fondo del "paper" del Drawer
                                    backgroundColor: theme.colors.background,
                                },
                            }}
                        >
                            <GroupOptionsInMenu/>
                        </Drawer>
                    </>
                ): <GroupOptionsInMenu/>}
            </>


        </>
    )
}

export default Sidebar;