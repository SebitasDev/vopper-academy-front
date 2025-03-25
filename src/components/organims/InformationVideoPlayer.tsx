import {Box, useTheme} from "@mui/material";
import DescriptionVideoPlayer from "../molecules/DescriptionVideoPlayer.tsx";
import AditionalInformationVideoPlayer from "../molecules/AditionalInformationVideoPlayer.tsx";

const InformationVideoPlayer = () => {

    const themeMUI = useTheme();

    return (
        <Box
            sx={{
                gridArea: "infoVideo",
                height: "100%",
                width: "100%"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "rows",
                    justifyContent: "space-between",
                    [themeMUI.breakpoints.down("sm")]: {
                        flexDirection: "column",
                        justifyContent: "inherit"
                    }
                }}
            >
                <DescriptionVideoPlayer/>
                <AditionalInformationVideoPlayer/>
            </Box>
        </Box>
    )
}

export default InformationVideoPlayer;