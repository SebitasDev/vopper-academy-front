import {Box} from "@mui/material";
import CountChapter from "../atoms/CountChapter.tsx";
import InfoChapterPreview from "../atoms/InfoChapterPreview.tsx";
import {Chapter} from "../../interfaces/apiInterfaces.ts";

type props = {
    countNumber: number;
    chapter: Chapter;

}

const ChapterPreview = ( { countNumber, chapter } : props ) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "rows",
                gap: .6,
            }}
        >
            <CountChapter count={countNumber}/>
            <InfoChapterPreview chapter={chapter}/>
        </Box>
    )
}

export default ChapterPreview;