import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Formik } from "formik"
import { StyledLink } from "../../components/styledLink/StyledLink"
import { StyledForm } from "../../components/styledForm/StyledForm"
import { NavContext } from "../../components/NavContextProvider/"
import {
  onComponentDidMountWithTitle,
  onComponentWillUnmountWithTitle,
} from "../../functions/"
import { state } from "./state"
import { signUp } from "./functions/signUp"

export class SignUp extends Component {
  state = state

  componentDidMount() {
    onComponentDidMountWithTitle(this, "Sign Up")
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitle(this)
  }

  render() {
    const { error, loading } = this.props

    return (
      <StyledForm className="StyledForm">
        <Formik
          initialValues={state}
          onSubmit={values => signUp(this, values)}
          validate={values => {
            let errors = {}

            if (!values.username) {
              errors.username = "Required"
            }

            if (!values.email) {
              errors.email = "Required"
            }

            if (!values.password) {
              errors.password = "Required"
            }

            return errors
          }}
          render={({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Typography variant="h4" align="center">
                Sign Up
              </Typography>
              <TextField
                id="username"
                label="Full Name"
                margin="normal"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                error={errors.username && touched.username}
                helperText={
                  errors.username && touched.username && errors.username
                }
              />

              <TextField
                id="email"
                label="Email"
                type="email"
                margin="normal"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                margin="normal"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
              />

              {error && <p className="error">{error}</p>}

              {!error && loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}

              {!loading && (
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={
                    (errors.username && touched.username) ||
                    (errors.email && touched.email) ||
                    (errors.password && touched.password)
                  }
                >
                  Sign Up
                </Button>
              )}

              <p>
                By signing up you agree to our{" "}
                <StyledLink to="/terms">Terms of service</StyledLink>
              </p>
              <p>
                Already have an account?{" "}
                <StyledLink to="/signIn">Sign In</StyledLink>
              </p>
            </form>
          )}
        />
      </StyledForm>
    )
  }
}

SignUp.contextType = NavContext
