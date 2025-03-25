import {Box, Typography} from "@mui/material";
import BatchCourse from "../atoms/BatchCourse.tsx";

const DescriptionVideoPlayer = () => {

    return (
        <Box
            sx={{
                padding: 1
            }}
        >
            {/* Titulo del curso */}
            <Typography
                variant={"h6"}
                fontWeight={"bold"}
                sx={{
                    color: "white",
                    mb: 0,
                    lineHeight: 1.2,
                }}
            >
                Arquitectura informatica
            </Typography>

            {/* Nombre del profesor */}
            <Typography
                variant={"subtitle1"}
                fontWeight={"bold"}
                sx={{
                    color: "gray",
                    lineHeight: 1.2,
                    mb: .6
                }}
            >
                Por Leonardo Chamorro
            </Typography>
            <BatchCourse/>
        </Box>
    )
}

export default DescriptionVideoPlayer;