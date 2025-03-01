import ImagePlayChapter from "../atoms/ImagePlayChapter.tsx";
import InformatinRecentCourse from "../atoms/InformatinRecentCourse.tsx";
import BatchCourse from "../atoms/BatchCourse.tsx";
import {Box} from "@mui/material";

const RecentCourseAdd = () => {

    return (
        <Box
            sx={{
                cursor: "pointer",
            }}
        >
            <ImagePlayChapter imageUrl={"https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_67b892e34a6cae3c507abda6_67b892e34a6cae3c507abdb7_77s.jpg"} id={"1212"}/>
            <InformatinRecentCourse/>
            <BatchCourse/>
        </Box>
    )
}

export default RecentCourseAdd;