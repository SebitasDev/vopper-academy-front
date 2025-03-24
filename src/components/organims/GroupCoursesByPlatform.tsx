import {Course as CourseApi} from "../../interfaces/apiInterfaces.ts";
import {Box, useTheme} from "@mui/material";
import Course from "../molecules/Course.tsx";

type props = {
    courses?: CourseApi[];
}

const GroupCoursesByPlatform = ({ courses } : props) => {

    const themeMUI = useTheme();

    return (
        <Box
            sx={{
                marginTop: "15px",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "15px",
                [themeMUI.breakpoints.down('md')]: {
                    gridTemplateColumns: "repeat(2, 1fr)",
                },
                [themeMUI.breakpoints.down('sm')]: {
                    gridTemplateColumns: '1fr',
                    placeItems: 'center', // centra horizontal y verticalmente
                },
            }}
        >
            { courses?.map((course, i) => (
                <Course course={course} key={i}/>
            )) }
        </Box>
    )
}

export default GroupCoursesByPlatform;