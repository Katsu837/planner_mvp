import Input from "@/components/Input";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";

const LoginForm = () => {
  const { push } = useRouter();
  const submitHandler = () => {
    localStorage.setItem("jwtToken", "fhjdsgfsgfhsghfsgfjs");
    push("/");
  };
  return (
    <>
      <Formik
        initialValues={{
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
                  <Typography>L O G I N</Typography>
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
                  <Button type="submit">Войти</Button>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
