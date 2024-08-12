import React, { useLayoutEffect, useState } from "react";
import { Grid, Link, Typography } from "@mui/material";
import LoginForm from "@/components/Forms/LoginForm";

const LoginTemplate = () => {
  const textUnderForm = "Еще нет аккаунта?";
  const regHref = "/authorization/registration";
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
          <LoginForm />
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
            <Link href={regHref}>Зарегистрироваться</Link>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>
            <Link>Политика конфидециальности</Link> и{" "}
            <Link>Пользовательское соглашение</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginTemplate;
