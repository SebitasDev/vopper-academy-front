import {Box, IconButton} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useRef} from "react";
import RecentCourseAdd from "./RecentCourseAdd.tsx";

const platforms = [
    { id: 1, name: "PlayStation", urlImage: "https://i.postimg.cc/W4jSzpzs/istockphoto-2099403180-1024x1024.jpg" },
    { id: 2, name: "Xbox", urlImage: "https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_67b8922cedc7cf98f9ea9d4e_67b8922cedc7cf98f9ea9d5f_70s.jpg" },
    { id: 3, name: "Nintendo", urlImage: "https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_67b8917a2f81b177350b3594_67b8917a2f81b177350b35a3_80s.jpg" },
    { id: 4, name: "PC", urlImage: "https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_67b892e34a6cae3c507abda6_67b892e34a6cae3c507abdb7_77s.jpg" },
    { id: 5, name: "Steam", urlImage: "https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_67b89397a9abb177458528f1_67b89397a9abb17745852902_82s.jpg" },
    { id: 6, name: "Epic Games", urlImage: "https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_67b89446edc7cf98f9ebd68e_67b89446edc7cf98f9ebd69f_67s.jpg" },
    { id: 7, name: "Mobile", urlImage: "https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_67b89442edc7cf98f9ebd5de_67b89442edc7cf98f9ebd5ef_38s.jpg" },
];

const GroupRecentCourses = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 200; // Cantidad de píxeles a desplazar
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box sx={{
            position: "relative",
            width: "100%",
            maxWidth: 1100,
            height: 300,
        }}>
            {/* Contenedor Desplazable */}
            <Box
                ref={scrollRef}
                sx={{
                    display: "flex",
                    gap: 3,
                    overflow: "hidden",
                    scrollBehavior: "smooth",
                    whiteSpace: "nowrap",
                    padding: "10px",
                    flexWrap: "nowrap",
                }}
            >
                {platforms.map((platform) => (
                    <RecentCourseAdd key={platform.id}/>
                ))}
            </Box>

            {/* Botón Izquierdo */}
            <IconButton
                onClick={() => scroll("left")}
                sx={{
                    position: "absolute",
                    left: 0,
                    top: "30%",
                    transform: "translateY(-30%)",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                    zIndex: 20,
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                }}
                size="small"
            >
                <ChevronLeft />
            </IconButton>

            {/* Botón Derecho */}
            <IconButton
                onClick={() => scroll("right")}
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "30%",
                    transform: "translateY(-30%)",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                    zIndex: 20,
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                }}
                size="small"
            >
                <ChevronRight />
            </IconButton>
        </Box>
    );
}

export default GroupRecentCourses;