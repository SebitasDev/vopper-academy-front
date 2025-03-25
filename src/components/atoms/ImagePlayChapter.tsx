import {Box} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import {useVideoPlayer} from "../../hooks/courses-hooks/useVideoPlayer.ts";

type props = {
    imageUrl: string,
    id: string,
}

const ImagePlayChapter = ( { imageUrl, id } : props ) => {

    const { viewCourse } = useVideoPlayer();

    return (
        <>
            <Box
                onClick={() => viewCourse(id)}
                sx={{
                    position: "relative",
                    width: "250px",
                    height: "170px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {/* Imagen */}
                <Box
                    component="img"
                    src={imageUrl}
                    alt={id}
                    sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "14px",
                        objectFit: "cover",
                        display: "block"
                    }}
                />

                {/* Icono de reproducir */}
                <PlayCircleOutlineIcon
                    sx={{
                        position: "absolute",
                        fontSize: 50, // Tamaño del icono
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro para que resalte
                        borderRadius: "50%",
                        padding: "8px",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.2)", // Efecto de agrandado al pasar el mouse
                        },
                        boxSizing: "border-box",
                    }}
                />
            </Box>
        </>
    )
}

export default ImagePlayChapter