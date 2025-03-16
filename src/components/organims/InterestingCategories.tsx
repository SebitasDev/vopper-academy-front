import {Box, Typography} from "@mui/material";
import {theme} from "../../styles/theme.ts";
import GroupInterestingCategories from "../molecules/GroupInterestingCategories.tsx";

const InterestingCategories = () => {

    return (
        <Box
            sx={{
                padding: 1,
                height: 350,
                maxHeight: 350
            }}
        >
            <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                    color: theme.colors.primary,
                    marginLeft: "5px"
                }}
            >
                Categorías{" "}
                <Box component="span" sx={{ color: "white" }}>
                    que podrían interesarte
                </Box>
            </Typography>

            <Box>
                <GroupInterestingCategories/>
            </Box>
        </Box>
    )
}

export default InterestingCategories;