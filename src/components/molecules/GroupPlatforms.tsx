import Platform from "../atoms/Platform.tsx";
import {Box, useTheme} from "@mui/material";
import {usePlatforms} from "../../hooks/platforms-hooks/usePlatforms.ts";

const GroupPlatforms = () => {

    const themeMUI = useTheme()
    const { platformsQuery } = usePlatforms();

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "5px",
                [themeMUI.breakpoints.down("md")]: {
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px"
                },
                [themeMUI.breakpoints.down("sm")]: {
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "10px"
                },
            }}
        >
            {platformsQuery.data?.map((platform) => (
                    <Platform platform={platform}/>
                ))
            }
        </Box>
    )
}

export default GroupPlatforms;