import {ListItem, ListItemIcon, ListItemText, useTheme} from "@mui/material";
import {JSX} from "react";
import {theme} from "../../styles/theme.ts";
//import {theme} from "../../styles/theme.ts";

type props = {
    name: string,
    icon: JSX.Element,
}

const OptionMenu = ({ name, icon } : props ) => {

    const themeMUI = useTheme();

    return (
        <>
            <ListItem
                key={name}
                component="button"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: 3,
                    marginBottom: 1.5,
                    color: "white",
                    transition: "background 0.3s ease",
                    "&:hover": {
                        backgroundColor: theme.colors.primary,
                    },

                    [themeMUI.breakpoints.down("sm")]: {
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "8px 10px",
                        marginBottom: 0,
                        justifyContent: "space-around",
                    },
                }}
            >
                <ListItemIcon
                    sx={{
                        [themeMUI.breakpoints.down("sm")]: {
                            minWidth: 0,
                        },
                    }}
                >{icon}</ListItemIcon>
                <ListItemText primary={name} />
            </ListItem>
        </>
    )
}

export default OptionMenu;