import { Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const MonthAndYear = ({ showYear }) => {
  const { currentMonth, currentYear, monthNames } = useSelector(
    (state) => state.date
  );
  const dispatch = useDispatch();

  return (
    <Grid
      item
      sx={{
        display: "flex",
        flexDirection: "row",
        columnGap: "10px",
      }}
    >
      <Typography fontSize={16}>{monthNames[currentMonth]}</Typography>
      {showYear ? <Typography>{currentYear}</Typography> : <></>}
    </Grid>
  );
};

export default MonthAndYear;
