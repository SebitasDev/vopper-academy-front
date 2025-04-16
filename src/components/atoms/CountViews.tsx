import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Box, Icon, Typography} from "@mui/material";
import {useVideoPlayer} from "../../hooks/courses-hooks/useVideoPlayer.ts";

const CountViews = () => {

    const { currentChapter } = useVideoPlayer();

    return (
        <Box
            sx={{
                display: "flex",
                color: "white"
            }}
        >
            <Icon
                sx={{
                    marginRight: "5px"
                }}
            >
                <RemoveRedEyeIcon/>
            </Icon>
            <Typography
                fontWeight="bold"
            >
                { currentChapter.views ?? 0 } vistas
            </Typography>
        </Box>
    )
}

export default CountViews;