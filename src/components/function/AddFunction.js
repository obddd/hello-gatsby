import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

import * as yup from "yup"
import { Formik, Form } from "formik"

let SignUpSchema = yup.object().shape({
  firstname: yup.string().required("Firstname is required!"),
  lastname: yup.string().required("Lastname is required!"),
  email: yup.string().email().required("Email is required!"),
  password: yup
    .string()
    .max(20, "Password is too long.")
    .required("This field is required."),
})

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
const AddFunction = () => {
  const [data, setData] = useState("")
  const classes = useStyles()
  return (
      <div>
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async values => {
        const response = await fetch(".netlify/functions/add", {
          method: "post",
          body: JSON.stringify(values),
        })
        const fetchData = await response.json()
        setData(fetchData)
      }}
    >
      {({ errors, handleChange, touched }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.firstname && touched.firstname}
                    autoComplete="fname"
                    name="firstname"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="firstname"
                    label="First Name"
                    helperText={
                      errors.firstname && touched.firstname
                        ? errors.firstname
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.lastname && touched.lastname}
                    autoComplete="lname"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    helperText={
                      errors.lastname && touched.lastname
                        ? errors.lastname
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.email && touched.email}
                    autoComplete="email"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="email"
                    label="Email"
                    name="email"
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.password && touched.password}
                    autoComplete="current-password"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="password"
                    label="Password"
                    name="password"
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Form>
          </div>
        </Container>
      )}
    </Formik>
    {data.id}
    </div>
  )
}

export default AddFunction
