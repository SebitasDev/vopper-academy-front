import {Box, Typography} from "@mui/material";
import {usePlatforms} from "../../hooks/platforms-hooks/usePlatforms.ts";

const PlatformDetailDescription = () => {

    const { platform } = usePlatforms();

    return (
        <Box
            sx={{
                width: "100%",
                height: "70px",
                borderRadius: "50px 5px 5px 50px",
                backgroundColor: "rgba(169, 169, 169, 0.1);",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <Box
                    component={"img"}
                    src={platform.urlImage}
                    sx={{
                        height: "60px",
                        width: "60px",
                        marginTop: "5px",
                        marginLeft: "5px",
                        borderRadius: "50%",
                    }}
                />

                <Typography
                    fontWeight={"bold"}
                    sx={{
                        marginLeft: "22px",
                        color: "white"
                    }}
                >
                    { platform.name }
                </Typography>
            </Box>
        </Box>
    )
}

export default PlatformDetailDescription;