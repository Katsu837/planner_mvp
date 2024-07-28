import React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";

const HomeTemplate = () => {
    return (
        <Grid2 container spacing={4}>
            <Grid2 xs={3}>
                {/*<LeftSideBar/>*/}
            </Grid2>s
            <Grid2 container xs={9}>
                <Grid2 xs={8}>
                    {/*<NavCalendar/>*/}
                </Grid2>
                <Grid2 xs={4}>
                    {/*<SearchAndProfileBar/>*/}
                </Grid2>
                <Grid2 xs={12}>
                    {/*<MainCalendar/>*/}
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default HomeTemplate;