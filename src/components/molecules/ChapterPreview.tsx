import {Box} from "@mui/material";
import CountChapter from "../atoms/CountChapter.tsx";
import InfoChapterPreview from "../atoms/InfoChapterPreview.tsx";

const ChapterPreview = () => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "rows",
                gap: .6,
            }}
        >
            <CountChapter/>
            <InfoChapterPreview/>
        </Box>
    )
}

export default ChapterPreview;