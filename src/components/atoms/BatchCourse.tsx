import {Box, Typography} from "@mui/material";

const BatchCourse = () => {



    return (
        <>
            <Box
                sx={{
                    paddingLeft: 1
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "gray",
                        display: "inline-block",
                        padding: .5,
                        borderRadius: 5
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: "10px"
                        }}
                    >
                        Tecnologia
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default BatchCourse;