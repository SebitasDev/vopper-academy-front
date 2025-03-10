import ImagePlayChapter from "../atoms/ImagePlayChapter.tsx";
import InformatinRecentCourse from "../atoms/InformatinRecentCourse.tsx";
import BatchCourse from "../atoms/BatchCourse.tsx";
import {Box} from "@mui/material";
import {Course} from "../../interfaces/apiInterfaces.ts";

type props = {
    course: Course
}

const RecentCourseAdd = ( { course } : props ) => {

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

export default RecentCourseAdd;