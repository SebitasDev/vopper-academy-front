import { Box, useMediaQuery, useTheme } from "@mui/material";
import IconPlatformHome from "../atoms/IconPlatformHome.tsx";
import { usePlatformsHome } from "../../hooks/groupPlatforms-hooks/usePlatformsHome.ts";

const GroupPlatformsInHome = () => {
    const themeMUI = useTheme();
    const { platformsQuery } = usePlatformsHome();

    const isMobile = useMediaQuery(themeMUI.breakpoints.down("sm"));
    const isDesktop = useMediaQuery(themeMUI.breakpoints.up("md"));

    // Determina cuántos elementos mostrar según el tamaño de pantalla
    const itemsToShow = isMobile ? 4 : isDesktop ? 9 : 7;

    return (
        <Box
            sx={{
                display: "flex",
                gap: 4.6,

                [themeMUI.breakpoints.down("sm")]: {
                    gap: 2,
                },
            }}
        >
            {platformsQuery.data?.slice(0, itemsToShow)
                .map((platform) => (
                    <IconPlatformHome
                        imageUrl={platform.urlImage}
                        name={platform.name}
                        key={platform.id}
                    />
                ))
            }
        </Box>
    );
};

export default GroupPlatformsInHome;
