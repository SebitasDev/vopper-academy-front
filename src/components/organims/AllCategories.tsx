import { Box, Typography } from "@mui/material";
import GroupAllCategories from "../molecules/GroupAllCategories.tsx";

const AllCtegories = () => {
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
                Todas las categorias
            </Typography>

            <GroupAllCategories/>
        </Box>
    )
}

export default AllCtegories;