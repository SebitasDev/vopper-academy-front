import {Box, Typography} from "@mui/material";
import {Platform} from "../../interfaces/apiInterfaces.ts";
import {usePlatforms} from "../../hooks/platforms-hooks/usePlatforms.ts";

type props = {
    platform: Platform
}

const IconPlatformHome = ( { platform } : props ) => {

    const { goToPlatformById } = usePlatforms()

    return (
        <Box
            onClick={() => goToPlatformById(platform)}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: .5,
                width: "65px",
                padding: .5
            }}
        >

            <Box
                component="img"
                src={platform.urlImage}
                sx={{
                    borderRadius: "100%",
                    width: "55px",
                    mx: "auto"
                }}
            >
            </Box>
            <Typography
                variant={"body2"}
                sx={{
                    mx: "auto",
                    color: "white",
                    textAlign: "center"
                }}
            >
                {platform.name}
            </Typography>
        </Box>
    )
}

export default IconPlatformHome;