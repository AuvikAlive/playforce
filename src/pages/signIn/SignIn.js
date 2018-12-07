import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import CircularProgress from "@material-ui/core/CircularProgress"
import { NavContext } from "components/NavContextProvider/"
import { Formik } from "formik"
import { StyledLink } from "../../components/styledLink/StyledLink"
import {
  onComponentDidMountWithTitle,
  onComponentWillUnmountWithTitle,
} from "../../functions/"
import { StyledSignIn } from "./StyledSignIn"
import { GoogleIcon } from "./GoogleIcon"
// import { FacebookIcon } from './FacebookIcon'
import { onCheckboxChange, signIn, signInWithProvider } from "./functions/"
import { state } from "./state"

export class SignIn extends Component {
  state = state

  componentDidMount() {
    onComponentDidMountWithTitle(this, "Sign In")
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitle(this)
  }

  render() {
    const { checked } = this.state
    const { error, loading } = this.props

    return (
      <StyledSignIn className="StyledSignIn">
        <Formik
          initialValues={state}
          onSubmit={values => signIn(this, values)}
          validate={values => {
            let errors = {}

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
                Sign In
              </Typography>
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

              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox
                    checked={checked}
                    onChange={onCheckboxChange(this)}
                    color="primary"
                  />
                }
                label="Keep me signed in"
              />

              {error && <p className="error">{error}</p>}

              {!error && loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}

              {!loading && (
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={
                      (errors.email && touched.email) ||
                      (errors.password && touched.password)
                    }
                    // onClick={signIn(this)}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="contained"
                    className="social-button"
                    onClick={signInWithProvider(this, "google")}
                  >
                    <GoogleIcon />
                    With Google
                  </Button>

                  {/* <Button variant="contained" className="social-button">
               <FacebookIcon />
               With Facebook
             </Button> */}
                </div>
              )}

              <p>
                <StyledLink to="/resetPassword">
                  Forgot your password?
                </StyledLink>
              </p>

              <p>
                Don't have an account?{" "}
                <StyledLink to="/SignUp">Sign up for free!</StyledLink>
              </p>
            </form>
          )}
        />
      </StyledSignIn>
    )
  }
}

SignIn.contextType = NavContext
