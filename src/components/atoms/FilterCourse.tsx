import {Box, InputLabel, Select, MenuItem, SelectChangeEvent, FormControl} from "@mui/material";
import {useState} from "react";

const FilterCourse = () => {

    const platforms = [
        { id: '1', name: 'IA' },
        { id: '2', name: 'Cloud' },
        { id: '3', name: 'Arquitectura' },
        { id: '4', name: 'UX/UI' },
    ];

    const [selectedId, setSelectedId] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedId(event.target.value);
    };

    return (
        <Box
            sx={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "250px",
            }}
        >
            <Box sx={{ width: 170 }}>
                <FormControl fullWidth sx={{ marginLeft: "5px" }}>
                    <InputLabel id="platform-select-label" sx={{ color: "white" }}>Filtrar por</InputLabel>
                    <Select
                        labelId="platform-select-label"
                        value={selectedId}
                        label="Plataforma"
                        onChange={handleChange}
                        sx={{
                            color: "white"
                        }}
                    >
                        {platforms.map((platform) => (
                            <MenuItem key={platform.id} value={platform.id}>
                                {platform.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}

export default FilterCourse;