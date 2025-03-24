import { Box, useTheme } from "@mui/material";
import CategoryCard from "../atoms/CategoryCard";

const GroupCategories = () => {
    const themeMUI = useTheme();

    return (
        <Box
            sx={{
                height: "50%",
                paddingTop: 1,
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "10px",
                overflow: "hidden",
                placeItems: "center",
                justifyItems: "center",
                [themeMUI.breakpoints.down("md")]: {
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "15px"
                },
                [themeMUI.breakpoints.down("sm")]: {
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "20px"
                },
            }}
        >
            {/* Estructura estática de las tarjetas */}
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </Box>
    );
};

export default GroupCategories;
