import {Box, useTheme} from "@mui/material";
import CountViews from "../atoms/CountViews.tsx";
import ButtonShare from "../atoms/ButtonShare.tsx";

const AditionalInformationVideoPlayer = () => {

    const themeMUI = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "baseline",
                gap: 2.5,
                padding: 1,
                [themeMUI.breakpoints.down("sm")]: {
                    marginLeft: "auto",
                }
            }}
        >
            <CountViews/>
            <ButtonShare/>
        </Box>
    )
}

export default AditionalInformationVideoPlayer;