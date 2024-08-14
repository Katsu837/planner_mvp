import { Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NearestEvent from "./NearestEvent";

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenBar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
  };

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        height: "calc(100vh - 40px)",
      }}
    >
      <Paper sx={{ padding: "20px", paddingBottom: "5px" }}>
        <Grid
          container
          sx={{
            flexDirection: "column",
            gap: "20px",
            justifyContent: "space-around",
          }}
        >
          <Grid item>
            <NearestEvent />
          </Grid>

          {isOpen ? (
            <>
              <Grid item sx={{ height: "30vh", backgroundColor: "salmon" }}>
                Список уведомлений
              </Grid>

              <Grid item sx={{ height: "calc(55vh - 35px)" }}>
                Список календарей/параметры события
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>

        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            onClick={handleOpenBar}
            sx={{ width: "30px", height: "30px" }}
          >
            {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </IconButton>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LeftSideBar;
