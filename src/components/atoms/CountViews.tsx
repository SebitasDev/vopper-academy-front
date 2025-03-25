import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Box, Icon, Typography} from "@mui/material";

const CountViews = () => {

    return (
        <Box
            sx={{
                display: "flex",
                color: "white"
            }}
        >
            <Icon
                sx={{
                    marginRight: "5px"
                }}
            >
                <RemoveRedEyeIcon/>
            </Icon>
            <Typography
                fontWeight="bold"
            >
                100 vistas
            </Typography>
        </Box>
    )
}

export default CountViews;