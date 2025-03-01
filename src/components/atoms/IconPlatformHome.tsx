import {Box, Typography} from "@mui/material";

type props = {
    imageUrl: string;
    name: string;
}

const IconPlatformHome = ( { imageUrl, name } : props ) => {


    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: .5,
                width: "65px",
                padding: .5
            }}
        >

            <Box
                component="img"
                src={imageUrl}
                sx={{
                    borderRadius: "100%",
                    width: "55px",
                    mx: "auto"
                }}
            >
            </Box>
            <Typography
                variant={"body2"}
                sx={{
                    mx: "auto",
                    color: "white",
                    textAlign: "center"
                }}
            >
                {name}
            </Typography>
        </Box>
    )
}

export default IconPlatformHome;