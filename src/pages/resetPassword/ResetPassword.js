import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import { StyledResetPassword } from './StyledResetPassword'

export class ResetPassword extends Component {
  state = {
    email: '',
    error: '',
    success: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Reset Password')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }

  onEmailChange = event => {
    const email = event.target.value
    this.setState({ email })
  }

  sendLink = async () => {
    const { email } = this.state
    const { firebase } = this.props

    if (email) {
      this.setState({ error: '', success: '', loading: true })

      const auth = firebase.auth()

      try {
        await auth.sendPasswordResetEmail(email)
        this.setState({
          success:
            "Email sent. If you haven't received it, please wait a couple of minutes then try again!",
          loading: false,
        })
      } catch (error) {
        this.setState({ error: error.message, loading: false })
      }
    } else {
      this.setState({
        error: 'Please enter your email address!',
        loading: false,
      })
    }
  }

  render() {
    const { error, success, loading } = this.state

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
              onChange={this.onEmailChange}
            />

            {error && <p className="error">{error}</p>}

            {success && <p className="success">{success}</p>}

            {!error &&
              loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}

            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.sendLink}
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

ResetPassword.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
