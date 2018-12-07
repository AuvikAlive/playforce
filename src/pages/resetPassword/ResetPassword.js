import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import CircularProgress from "@material-ui/core/CircularProgress"
import Button from "@material-ui/core/Button"
import { NavContext } from "components/NavContextProvider/"
import { onEventInputChange } from "../../functions/"
import { StyledResetPassword } from "./StyledResetPassword"
import {
  onComponentDidMount,
  onComponentWillUnmount,
  submit,
} from "./functions/"

export class ResetPassword extends Component {
  state = {
    email: "",
    success: "",
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    const { success } = this.state
    const { error, loading } = this.props

    return (
      <StyledResetPassword>
        <Card className="card">
          <CardContent>
            <Typography align="center">
              An email with a link to reset your password will be sent to your
              address
            </Typography>
            <TextField
              id="email"
              label="Email"
              type="email"
              margin="normal"
              fullWidth
              onChange={onEventInputChange(this, "email")}
            />

            {error && <p className="error">{error}</p>}

            {success && <p className="success">{success}</p>}

            {!error && loading && (
              <div className="loading">
                <CircularProgress />
              </div>
            )}

            {!loading && (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className="submit-button"
                onClick={submit(this)}
              >
                Send Link
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledResetPassword>
    )
  }
}

ResetPassword.contextType = NavContext
