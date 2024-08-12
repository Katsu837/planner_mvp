import { Grid, Paper } from "@mui/material";
import { MonthAndYear } from "./MonthAndYear";

const NavigationCalendar = () => {
  return (
    <Grid>
      <Paper>
        <Grid container>
          <MonthAndYear />
        </Grid>
        <Grid container>{/* DAYS */}</Grid>
      </Paper>
    </Grid>
  );
};

export default NavigationCalendar;
