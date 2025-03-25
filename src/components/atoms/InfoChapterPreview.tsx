import {Box, Typography} from "@mui/material";
import {Chapter} from "../../interfaces/apiInterfaces.ts";

type props = {
    chapter: Chapter
}

const InfoChapterPreview = ( { chapter } : props ) => {

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateRows: "auto",
                gridTemplateAreas: `"img title" 
                                    "img status"`,
                gap: 1,
            }}
        >
            <Box
                component={"img"}
                src={chapter.imageUrl}
                sx={{
                    gridArea: "img",
                    width: "50px",
                    height: "50px",
                    objectFit: 'cover',
                    borderRadius: '8px',
                    my: "auto"
                }}
            />
            
            <Typography
                fontWeight={"bold"}
                sx={{
                    gridArea: "title",
                    color: "gray",
                    lineHeight: 1.2,
                    mb: 0,
                    whiteSpace: 'normal',
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                    fontSize: "15px"
                }}
            >
                { chapter.title }
            </Typography>
            <Typography
                fontWeight={"bold"}
                sx={{
                    gridArea: "status",
                    color: "#9BA4FD",
                    lineHeight: 1.2,
                    mt: 0
                }}
            >
                { chapter.duration }
            </Typography>
        </Box>
    )
}

export default InfoChapterPreview;