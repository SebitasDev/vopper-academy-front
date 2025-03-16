import InterestingCategory from "../atoms/InterestingCategory.tsx";
import {Box, useMediaQuery, useTheme} from "@mui/material";

const GroupInterestingCategories = () => {

    const themeMUI = useTheme();
    const isMobileOrTablet = useMediaQuery(themeMUI.breakpoints.down("md")); // md y menores
    const isSmallScreen = useMediaQuery(themeMUI.breakpoints.down("xs")); // xs

    return (
        <Box
            sx={{
                height: "50%",
                paddingTop: 1,
                display: "flex",
                gap: 3,
                overflowX: "hidden",
            }}
        >
            {isSmallScreen ? (
                <>
                    <InterestingCategory />
                    <InterestingCategory />
                </>
            ) : isMobileOrTablet ? (
                <>
                    <InterestingCategory />
                    <InterestingCategory />
                    <InterestingCategory />
                    <InterestingCategory />
                </>
            ) : (
                <>
                    <InterestingCategory />
                    <InterestingCategory />
                    <InterestingCategory />
                    <InterestingCategory />
                </>
            )}

        </Box>
    )
}

export default GroupInterestingCategories;