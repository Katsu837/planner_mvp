import React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";

const HomePage = () => {
    return (
        <Grid2 container spacing={4}>
            <Grid2 sx={{background: "red" }} xs={4}></Grid2>
            <Grid2 sx={{background: "blue" }} xs={4}></Grid2>
            <Grid2 sx={{background: "green" }} xs={4}></Grid2>
            <Grid2 sx={{background: "black" }} xs={4}></Grid2>
        </Grid2>
    );
};

export default HomePage;