import {Box, Typography, useTheme} from "@mui/material";

type props = {
    count: number;
}

const CountChapter = ( { count } : props ) => {

    const themeMUI = useTheme();

    return (
        <Box
            sx={{
                width: "40px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#9BA3FD",
                my: "auto",
                [themeMUI.breakpoints.down("md")]: {
                    width: "30px"
                }
            }}
        >
            <Typography
                fontWeight={"bold"}
                sx={{
                    color: "white"
                }}
            >
                { count }
            </Typography>
        </Box>
    )
}

export default CountChapter;