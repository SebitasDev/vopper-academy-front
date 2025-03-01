import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {JSX} from "react";
import {theme} from "../../styles/theme.ts";
import {useOptionMenu} from "../../hooks/sidebar-hooks/useOptionMenu.ts";

type props = {
    name: string,
    icon: JSX.Element,
}

const OptionMenu = ({ name, icon } : props ) => {

    const { actualRoute, goTo } = useOptionMenu(name);

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
                    backgroundColor: actualRoute && theme.colors.primary,
                    transition: "background 0.3s ease",
                    "&:hover": {
                        backgroundColor: theme.colors.primary,
                    },
                }}
                onClick={() => goTo()}
            >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
            </ListItem>
        </>
    )
}

export default OptionMenu;