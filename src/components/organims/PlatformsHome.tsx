import {Box, Typography} from "@mui/material";
import GroupPlatformsInHome from "../molecules/GroupPlatformsInHome.tsx";

const PlatformsHome = () => {

    return (
        <Box
            sx={{
                padding: 1,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 1
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        color: "white",
                        marginLeft: "5px"
                    }}
                >
                    Plataformas
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        cursor: "pointer",
                        color: "gray",
                        borderBottom: "1px solid gray",
                        marginRight: "5px"
                    }}>
                    Ver más
                </Typography>
            </Box>

            <GroupPlatformsInHome/>
        </Box>

    )
}

export default PlatformsHome;