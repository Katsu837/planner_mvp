import React, { useLayoutEffect, useState } from "react";
import { Grid, Link, Typography } from "@mui/material";
import LoginForm from "@/components/Forms/LoginForm";
import { RegistrationForm } from "@/components/Forms/RegistrationForm";

const RegistrationTemplate = () => {
  const textUnderForm = "Уже есть аккаунт?";
  const loginHref = "/authorization/login";
  const sx = {
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Grid container sx={{ width: "100vw", height: "100vh" }}>
      <Grid
        container
        sx={{ ...sx, justifyContent: "space-between", padding: "20px" }}
      >
        <Grid item sx={sx}>
          <Typography> P L A N N E R </Typography>
        </Grid>
        <Grid container sx={{ ...sx, rowGap: "15px" }}>
          <RegistrationForm />
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "5px",
            }}
          >
            <Typography>{textUnderForm}</Typography>
            <Link href={loginHref}>Войти</Link>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>Узнать больше</Typography>
        </Grid>
      </Grid>
      <Grid item sx={sx}></Grid>
    </Grid>
  );
};

export default RegistrationTemplate;
