import React from "react";
import LeftSideBar from "@/components/LeftSideBar";
import NavigationCalendar from "@/components/NavigationCalendar";
import { Grid } from "@mui/material";

const HomeTemplate = () => {
  //   const { data, isLoading, error } = useUser();

  return (
    <Grid container spacing={4} columns={24}>
      <Grid xs={5}>
        <LeftSideBar />
      </Grid>
      <Grid container xs={19}>
        <Grid xs={8}>
          <NavigationCalendar />
        </Grid>
        <Grid xs={4}>{/*<SearchAndProfileBar/>*/}</Grid>
        <Grid xs={12}>{/*<MainCalendar/>*/}</Grid>
      </Grid>
    </Grid>
  );
};

export default HomeTemplate;
