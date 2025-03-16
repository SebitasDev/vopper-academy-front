import {Box, IconButton, Typography} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useRef} from "react";
import RecentCourseAdd from "../molecules/RecentCourseAdd.tsx";
import useRecentCourses from "../../hooks/recentCourses-hooks/useRecentCourses.ts";
import {theme} from "../../styles/theme.ts";



const GroupRecentCourses = () => {

    const { lastCourses } = useRecentCourses();

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
        <Box
            sx={{
                padding: 1
            }}
        >
            <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                    color: "white",
                    marginLeft: "5px"
                }}
            >
                Cursos recién{" "}
                <Box component="span" sx={{ color: theme.colors.primary }}>
                    agregados
                </Box>
            </Typography>

            <Box sx={{
                position: "relative",
                width: "auto",
                maxWidth: 1100,
                height: 300,
                marginBottom: 1,
            }}>

                {/* Contenedor Desplazable */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        gap: 3,
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        whiteSpace: "nowrap",
                        padding: "10px",
                        flexWrap: "nowrap",
                        /* Ocultar scrollbar */
                        "&::-webkit-scrollbar": { display: "none" },
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none",
                    }}
                >
                    {lastCourses?.map((course) => (
                        <RecentCourseAdd
                            course={course}
                            key={course.id}
                        />
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
        </Box>
    );
}

export default GroupRecentCourses;