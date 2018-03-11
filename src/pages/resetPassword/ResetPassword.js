import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import { StyledResetPassword } from './StyledResetPassword'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost'
    : 'https://material-pwa.firebaseapp.com'

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

  sendLink = () => {
    const { email } = this.state
    const { firebase } = this.props

    if (email) {
      this.setState({ error: '' })
      this.setState({ loading: true })

      const actionCodeSettings = {
        url: `${baseUrl}/confirmResetPassword`,
      }

      firebase
        .auth()
        .sendPasswordResetEmail(email, actionCodeSettings)
        .then(() => {
          this.setState({
            success:
              "Email sent. If you haven't received it, please wait a couple of minutes then try again!",
          })
          this.setState({ loading: false })
        })
        .catch(error => {
          this.setState({ error: error.message })
          this.setState({ loading: false })
        })
    } else {
      this.setState({ error: 'Please enter your email address!' })
      this.setState({ loading: false })
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
