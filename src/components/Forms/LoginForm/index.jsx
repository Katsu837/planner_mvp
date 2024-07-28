import { Box } from "@mui/material";
import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  const submitHandler = () => {
    localStorage.setItem("jwtToken", "fhjdsgfsgfhsghfsgfjs");
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
        {({ isSubmitting, errors, values }) => (
          <Form>
            <Box>
              <Field></Field>
            </Box>
            <Box>
              <Field></Field>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
