import Input from "@/components/Input";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";

export const RegistrationForm = () => {
  const submitHandler = () => {
    localStorage.setItem("jwtToken", "fhjdsgfsgfhsghfsgfjs");
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={submitHandler}
      >
        {({ isSubmitting, errors, values, touched }) => (
          <Form>
            <Paper>
              <Grid container sx={{ flexDirection: "column", rowGap: "15px" }}>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>R E G I S T R A T I O N</Typography>
                </Grid>

                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                    minWidth: "300px",
                    padding: "5px",
                  }}
                >
                  <Field
                    name="name"
                    label="Name"
                    component={Input}
                    errors={errors}
                    touched={touched}
                    type="text"
                  />

                  <Field
                    name="email"
                    label="Email"
                    component={Input}
                    errors={errors}
                    touched={touched}
                    type="text"
                  />

                  <Field
                    name="password"
                    label="Password"
                    component={Input}
                    errors={errors}
                    touched={touched}
                    type="password"
                  ></Field>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button>Войти</Button>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        )}
      </Formik>
    </>
  );
};
