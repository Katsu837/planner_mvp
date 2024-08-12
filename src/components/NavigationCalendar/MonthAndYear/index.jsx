import { Grid, Typography } from "@mui/material/index";
import {
  useDispatch,
  useSelector,
} from "../../../../node_modules/react-redux/dist/react-redux";

const MonthAndYear = () => {
  const { currentMonth, currentYear } = useSelector((state) => state.date);
  const dispatch = useDispatch();

  return (
    <Grid
      item
      sx={{ display: "flex", flexDirection: "row", columnGap: "20px" }}
    >
      <Typography>{currentMonth}</Typography>
      <Typography>{currentYear}</Typography>
    </Grid>
  );
};

export default MonthAndYear;
