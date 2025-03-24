import ImagePlayChapter from "../atoms/ImagePlayChapter.tsx";
import InformatinRecentCourse from "../atoms/InformatinRecentCourse.tsx";
import BatchCourse from "../atoms/BatchCourse.tsx";
import {Box} from "@mui/material";
import {Course as CourseApi} from "../../interfaces/apiInterfaces.ts";

type props = {
    course: CourseApi
}

const Course = ( { course } : props ) => {

    return (
        <Box
            sx={{
                cursor: "pointer",
            }}
        >
            <ImagePlayChapter imageUrl={course.imageUrl} id={course.id}/>
            <InformatinRecentCourse/>
            <BatchCourse/>
        </Box>
    )
}

export default Course;