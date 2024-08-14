import { Divider, Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Days = () => {
  const {
    selectDate,
    selectMonth,
    selectYear,
    currentDate,
    currentMonth,
    currentYear,
    weekdays,
  } = useSelector((state) => state.date);
  const dispatch = useDispatch();
  const firstWeekdayOfMonth = new Date(selectYear, selectMonth, 1).getDay();
  const countDayOfMonth = 33 - new Date(selectYear, selectMonth, 33).getDate();
  let dayArray = [];

  for (let i = 0; i < countDayOfMonth; i++) {
    const numTempDay = (firstWeekdayOfMonth + i) % 7;
    const tempDay = weekdays[numTempDay];
    dayArray.push({ date: i + 1, weekday: tempDay, numTempDay: numTempDay });
  }
  console.log(dayArray);

  return (
    <Grid
      container
      sx={{
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
      }}
    >
      {dayArray.map(({ date, weekday, numTempDay }, index) => {
        const isWeek = numTempDay % 7 === 0 ? true : false;
        const isToday =
          currentMonth === selectMonth &&
          currentYear === selectYear &&
          date === currentDate;
        return (
          <>
            <Grid item key={index} alignContent="center">
              <Typography sx={{ textAlign: "center" }}>{weekday}</Typography>
              {isToday ? (
                <Typography
                  sx={{
                    textAlign: "center",
                    borderRadius: "20px",
                    paddingX: "3px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  {date}
                </Typography>
              ) : (
                <Typography sx={{ textAlign: "center", paddingX: "3px" }}>
                  {date}
                </Typography>
              )}
            </Grid>
            {isWeek ? <Divider orientation="vertical" /> : <></>}
          </>
        );
      })}
    </Grid>
  );
};

export default Days;
