import {Box, Typography} from "@mui/material";
import {theme} from "../../styles/theme.ts";
import GroupPlatforms from "../molecules/GroupPlatforms.tsx";

const AllPlatforms = () => {

    return (
        <Box>
            <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                    color: "white",
                    marginLeft: "5px",
                    marginBottom: "5px"
                }}
            >
                Todas nuestras{" "}
                <Box component="span" sx={{ color: theme.colors.primary }}>
                    Plataformas
                </Box>
            </Typography>

            <GroupPlatforms/>
        </Box>
    )
}

export default AllPlatforms;