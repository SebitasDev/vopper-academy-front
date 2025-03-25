import {Box, Typography} from "@mui/material";

const InfoChapterPreview = () => {

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
                src={"https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_678019e9cec9a86e1fa9bf3e_678019e9cec9a86e1fa9bf51_19s.jpg"}
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
                    whiteSpace: 'normal', // 🔥 permite saltos de línea
                    overflowWrap: 'break-word', // 🔥 corta palabras largas si hace falta
                    wordBreak: 'break-word', // extra: más seguro para palabras largas sin espacios
                }}
            >
                Dark patterns en e-commerce
            </Typography>
            <Typography
                fontWeight={"bold"}
                sx={{
                    gridArea: "status",
                    color: "#9BA4FD",
                    lineHeight: 1.2, // 🔥 igual que arriba para coherencia
                    mt: 0 // opcional: elimina margen superior si existe
                }}
            >
                8:08
            </Typography>
        </Box>
    )
}

export default InfoChapterPreview;