import React from "react";
import LeftSideBar from "@/components/LeftSideBar";
import NavigationCalendar from "@/components/NavigationCalendar";
import { Grid } from "@mui/material";

const HomeTemplate = () => {
  //   const { data, isLoading, error } = useUser();

  return (
    <Grid
      container
      columns={16}
      sx={{
        display: "flex",
        marginTop: "0",
        marginLeft: "0",
        flexDirection: "row",
        flexWrap: "nowrap",
        columnGap: "20px",
      }}
    >
      <Grid xs={4}>
        <LeftSideBar />
      </Grid>

      <Grid container xs={12}>
        <Grid item xs={9} sx={{ maxHeight: "104px%" }}>
          <NavigationCalendar />
        </Grid>

        <Grid item xs={3}>
          {/*<SearchAndProfileBar/>*/}
        </Grid>
        <Grid item xs={12}>
          {/*<MainCalendar/>*/}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeTemplate;
