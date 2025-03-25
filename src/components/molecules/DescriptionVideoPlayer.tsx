import {Box, Typography} from "@mui/material";
import BatchCourse from "../atoms/BatchCourse.tsx";
import {useVideoPlayer} from "../../hooks/courses-hooks/useVideoPlayer.ts";

const DescriptionVideoPlayer = () => {

    const { course } = useVideoPlayer();

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
                { course.title }
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
                Por { course.teacher }
            </Typography>
            <BatchCourse/>
        </Box>
    )
}

export default DescriptionVideoPlayer;