import {Button, Typography} from "@mui/material";
import RedoIcon from '@mui/icons-material/Redo';
import {theme} from "../../styles/theme.ts";

const ButtonShare = () => {

    return (
        <Button
            sx={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                gap: 1,
                textTransform: "none",
                borderRadius: "15px",
                border: `1.9px solid ${theme.colors.primary}`,
                color: "white",
                width: "170px"
            }}
        >
            <RedoIcon sx={{ fontSize: 20, fontWeight: "bold" }} />
            <Typography fontWeight={"bold"}>Compartir</Typography>
        </Button>

    )
}

export default ButtonShare;