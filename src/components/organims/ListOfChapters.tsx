import {Box, Typography} from "@mui/material";
import ChapterPreview from "../molecules/ChapterPreview.tsx";

const ListOfChapters = () => {

    return (
        <Box
            sx={{
                gridArea: "contentTable",
                backgroundColor: "rgba(169, 169, 169, 0.1);",
                height: "100%",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    padding: 1
                }}
            >
                <Typography
                    variant={"h6"}
                    sx={{ color: "white" }}
                >
                    Capítulos
                </Typography>

                <Box
                    sx={{
                        width: "100%",
                        height: "460px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        overflowY: "auto",
                        pr: 1, // opcional: evita que el contenido se superponga con el scroll

                        '&::-webkit-scrollbar': {
                            width: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        },
                    }}
                >
                    <ChapterPreview/>
                    <ChapterPreview/>
                    <ChapterPreview/>
                    <ChapterPreview/>
                    <ChapterPreview/>
                    <ChapterPreview/>
                    <ChapterPreview/>
                    <ChapterPreview/>
                    <ChapterPreview/>
                    <ChapterPreview/>
                </Box>
            </Box>
        </Box>
    )
}

export default ListOfChapters;