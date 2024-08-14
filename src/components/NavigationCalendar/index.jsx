import { Grid, Paper } from "@mui/material";
import MonthAndYear from "./MonthAndYear";
import { useEffect, useState } from "react";
import Days from "./Days";

const NavigationCalendar = () => {
  const [isHover, setIsHover] = useState(false);
  console.log(isHover);

  useEffect(() => {}, [isHover]);
  return (
    <Grid
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Paper>
        <Grid container sx={{ justifyContent: "center" }}>
          <MonthAndYear showYear={isHover} />
        </Grid>
        <Grid container>
          <Days />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default NavigationCalendar;
