import {Box, Typography} from "@mui/material";

const CategoryCard = () => {

    return (
        <Box
            sx={{
                height: "100%",
                maxHeight: "100%",
                width: "170px",
            }}
        >
            <Box
                component="img"
                src="https://i.postimg.cc/5y6V8h95/7f7b0c9bf14ae9b769705a071dfb6dd0.jpg"
                alt="id"
                sx={{
                    width: "170px",
                    objectFit: "contain",
                    borderRadius: "10%",
                }}
            />

            <Typography
                variant="subtitle1"
                sx={{
                    color: "white",
                    marginLeft: "5px",
                    lineHeight: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}

            >
                Lenguajes de programación
            </Typography>
        </Box>



    )
}

export default CategoryCard;