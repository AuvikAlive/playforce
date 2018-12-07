import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import { StyledLink } from "../../components/styledLink/StyledLink"
import { StyledForm } from "../../components/styledForm/StyledForm"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitle,
  onComponentWillUnmountWithTitle,
  onEventInputChange,
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
        <form noValidate autoComplete="off">
          <Typography variant="h4" align="center">
            Sign Up
          </Typography>
          <TextField
            id="fullName"
            label="Full Name"
            margin="normal"
            fullWidth
            onChange={onEventInputChange(this, "username")}
          />

          <TextField
            id="email"
            label="Email"
            type="email"
            margin="normal"
            fullWidth
            onChange={onEventInputChange(this, "email")}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            onChange={onEventInputChange(this, "password")}
          />

          {error && <p className="error">{error}</p>}

          {!error && loading && (
            <div className="loading">
              <CircularProgress />
            </div>
          )}

          {!loading && (
            <Button variant="contained" color="primary" onClick={signUp(this)}>
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
      </StyledForm>
    )
  }
}

SignUp.contextType = NavContext
