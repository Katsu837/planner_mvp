import { Divider, Grid, Typography } from "@mui/material";

const NearestEvent = () => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography sx={{ textAlign: "center" }}>Ближайшее событие</Typography>
      <Divider />
      <Typography sx={{ textAlign: "center" }}>Время события</Typography>
    </Grid>
  );
};

export default NearestEvent;
