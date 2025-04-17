import MainLayout from "../templates/MainLayout.tsx";
import {Box, useTheme} from "@mui/material";
import VideoPlayer from "../atoms/VideoPlayer.tsx";
import InformationVideoPlayer from "../organims/InformationVideoPlayer.tsx";
import ListOfChapters from "../organims/ListOfChapters.tsx";
import {useVideoPlayer} from "../../hooks/courses-hooks/useVideoPlayer.ts";
import HelperChapter from "../organims/HelperChapter.tsx";

const WatchCourse = () => {

    const { course } = useVideoPlayer();
    const themeMUI = useTheme();

    return (
        <MainLayout>
            <Box
                sx={{
                    display: "grid",
                    height: "100%",
                    width: "100%",
                    gridTemplateColumns: "75% 25%",
                    gridTemplateRows: "10% 77% 13%",
                    gridTemplateAreas: `"helperChapter helperChapter"
                                        "video contentTable" 
                                        "infoVideo contentTable"`,
                    [themeMUI.breakpoints.down("md")]: {
                        gridTemplateColumns: "100%",
                        gridTemplateRows: "40% 10% 50%",
                        gridTemplateAreas: `"video" 
                                            "infoVideo"
                                            "contentTable"`,
                        gap: 2,
                    },
                    [themeMUI.breakpoints.down("sm")]: {
                        gridTemplateRows: "40% 20% 40%",
                    }
                }}
            >
                <HelperChapter/>
                <VideoPlayer/>
                <ListOfChapters chapters={course.chapters}/>
                <InformationVideoPlayer/>
            </Box>
        </MainLayout>
    )
}

export default WatchCourse;