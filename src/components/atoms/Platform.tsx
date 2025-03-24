import {Box, Button, Typography} from "@mui/material";
import {Platform as PlatformInterface} from "../../interfaces/apiInterfaces.ts";
import {theme} from "../../styles/theme.ts";
import {usePlatforms} from "../../hooks/platforms-hooks/usePlatforms.ts";

type props = {
    platform: PlatformInterface
}

const Platform = ({ platform } : props) => {

    const { goToPlatformById } = usePlatforms();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                height: "270px",
            }}
        >
            {/* Imagen */}
            <Box
                component={"img"}
                src={platform.urlImage}
                sx={{
                    borderRadius: "50%",
                    height: "70px",
                    mx: "auto",
                    marginBottom: "3px"
                }}
            />
            {/* Nombre */}
            <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                    color: "white",
                    mx: "auto",
                    marginBottom: "3px"
                }}
            >
                { platform.name }
            </Typography>

            {/* Descripción */}
            <Typography
                variant="body1"
                fontWeight="bold"
                sx={{
                    color: "gray",
                    mx: "auto",
                    textAlign: "center",
                    fontSize: "13px",
                    marginBottom: "6px",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minHeight: "72px",
                }}
            >
                {platform.description}
            </Typography>

            <Button
                onClick={() => goToPlatformById(platform) }
                sx={{
                    width: "70%",
                    mx: "auto",
                    backgroundColor: theme.colors.primary,
                    borderRadius: "15px"
                }}
                variant="contained"
            >
                Ver
            </Button>
        </Box>
    )
}

export default Platform