import {Box, InputAdornment, TextField, useTheme} from "@mui/material";
import React, {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";

type props = {
    onSearch: (query: string) => void
}

const SearchSidebar = ({ onSearch } : props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const themeMUI = useTheme()


    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                my: "auto",
                height: "40px"
            }}
        >
            <TextField
                variant="outlined"
                placeholder="¿Que deseas aprender hoy?"
                value={searchTerm}
                onChange={handleSearch}
                size={"small"}
                sx={{
                    width: "100%",
                    maxWidth: "60%",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": {
                        color: "white", // Color del texto
                        "& fieldset": {
                            borderColor: "gray", // Borde blanco
                        },
                        "&:hover fieldset": {
                            borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "white",
                        },
                    },
                    "& .MuiInputBase-input::placeholder": {
                        color: "rgba(255, 255, 255, 0.7)",
                    },
                    [themeMUI.breakpoints.down("sm")]: {
                        maxWidth: "88%",
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: "white" }}/>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}

export default SearchSidebar;