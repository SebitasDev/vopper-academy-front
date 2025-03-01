import {Box, Typography} from "@mui/material";

const InformatinRecentCourse = () => {

    return (
        <>
            <Box
                sx={{
                    padding: 0.6,
                    paddingLeft: 1.2
                }}
            >

                <Typography
                    variant="subtitle2"
                    sx={{
                        color: "white"
                    }}
                >
                    Arquitectura informatica
                </Typography>

                <Typography
                    variant="caption"
                    sx={{
                        color: "gray"
                    }}
                >
                    Por Sebastian Ramirez
                </Typography>

            </Box>
        </>
    )
}

export default InformatinRecentCourse;