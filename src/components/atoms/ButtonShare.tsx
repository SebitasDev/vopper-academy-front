import {Button, Typography} from "@mui/material";
import RedoIcon from '@mui/icons-material/Redo';
import {theme} from "../../styles/theme.ts";
import {useVideoPlayer} from "../../hooks/courses-hooks/useVideoPlayer.ts";

const ButtonShare = () => {

    const { shareCourse } = useVideoPlayer();

    return (
        <Button
            onClick={() => shareCourse()}
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