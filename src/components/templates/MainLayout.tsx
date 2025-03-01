import {Grid, useTheme} from "@mui/material";
import Sidebar from "../organims/Sidebar.tsx";
import SearchSidebar from "../atoms/SearchSidebar.tsx";
import { ReactNode } from "react";  // Import ReactNode

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const handleSearch = (query: string) => {
        console.log("Buscando:", query);
    };

    const themeMUI = useTheme();

    return (
        <Grid
            container
            sx={{
                minHeight: "100vh",
                display: "grid",
                gridTemplateColumns: "1fr 11fr",
                gridTemplateRows: "auto 1fr",
                gridTemplateAreas: `"sidebar header" 
                                    "sidebar content"`,

                [themeMUI.breakpoints.down("sm")]: {
                    gridTemplateAreas: `"sidebar header" 
                                        "content content"`,
                }
            }}
        >
            {/* Sidebar */}
            <Grid
                item
                xs={12}
                md={12}
                sx={{
                    padding: 1,
                    height: "100%",
                    gridArea: "sidebar",
                }}
            >
                <Sidebar />
            </Grid>

            {/* Header (Search Sidebar) */}
            <Grid
                item
                xs={12}
                md={12}
                sx={{
                    padding: 2,
                    gridArea: "header",
                }}
            >
                <SearchSidebar onSearch={handleSearch} />
            </Grid>

            {/* Content (children) */}
            <Grid
                item
                xs={12}
                md={12}
                sx={{
                    padding: 2,
                    gridArea: "content",
                    height: "100%",
                    width: "100%",
                }}
            >
                {children}
            </Grid>
        </Grid>
    );
};

export default MainLayout;
