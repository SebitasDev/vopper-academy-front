import MainLayout from "../templates/MainLayout.tsx";
import {Box} from "@mui/material";
import {useCoursesByPlatform} from "../../hooks/courses-hooks/useCoursesByPlatform.ts";
import PlatformDetailDescription from "../atoms/PlatformDetailDescription.tsx";
import FilterCourse from "../atoms/FilterCourse.tsx";
import GroupCoursesByPlatform from "../organims/GroupCoursesByPlatform.tsx";
const PlatformDetail = () => {

    const { coursesByPlatformQuery } = useCoursesByPlatform();

    return (
        <MainLayout>
            <PlatformDetailDescription/>
            <FilterCourse/>
            <Box>
                <GroupCoursesByPlatform courses={coursesByPlatformQuery.data}/>
            </Box>
        </MainLayout>
    )
}

export default PlatformDetail;