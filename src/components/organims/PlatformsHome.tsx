import {Box, Button, Typography} from "@mui/material";
import GroupPlatformsInHome from "../molecules/GroupPlatformsInHome.tsx";
import {useNavigate} from "@tanstack/react-router";

const PlatformsHome = () => {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                padding: 1,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 1
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
                    Plataformas
                </Typography>

                <Button onClick={() => navigate({ to: '/plataformas' })}>
                    <Typography
                        variant="body2"
                        sx={{
                            cursor: "pointer",
                            color: "gray",
                            borderBottom: "1px solid gray",
                            marginRight: "5px"
                        }}>
                        Ver más
                    </Typography>
                </Button>
            </Box>

            <GroupPlatformsInHome/>
        </Box>

    )
}

export default PlatformsHome;