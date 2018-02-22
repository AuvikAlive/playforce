import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import { StyledSignUp } from './StyledSignUp'
import { Logo } from '../../components/logo/Logo'

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    error: ''
  }

  onNameChange = event => {
    const username = event.target.value
    this.setState({ username })
  }

  onEmailChange = event => {
    const email = event.target.value
    this.setState({ email })
  }

  onPasswordChange = event => {
    const password = event.target.value
    this.setState({ password })
  }

  signUp = () => {
    const { username, email, password } = this.state
    const { firebase, history } = this.props

    this.setState({ error: '' })

    if (username && email && password) {
      const p = firebase.createUser({ email, password }, { username, email })

      p
        .then(value => {
          history.push('/dashboard')
        })
        .catch(error => {
          this.setState({ error: error.message })
        })
    } else {
      this.setState({ error: 'Please fill up the form properly!' })
    }
  }

  render() {
    const { error } = this.state

    return (
      <StyledSignUp>
        <Grid container spacing={0} className="container">
          <Grid item xs={6} className="left" />
          <Grid item xs={6}>
            <form noValidate autoComplete="off">
              <Logo />
              <Typography variant="display1" align="center">
                Free 30 day full-featured trial
              </Typography>
              <TextField
                id="fullName"
                label="Full Name"
                margin="normal"
                fullWidth
                onChange={this.onNameChange}
              />

              <TextField
                id="email"
                label="Email"
                type="email"
                margin="normal"
                fullWidth
                onChange={this.onEmailChange}
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                margin="normal"
                fullWidth
                onChange={this.onPasswordChange}
              />

              {error && <p className="error">{error}</p>}

              <Button variant="raised" color="primary" onClick={this.signUp}>
                Start Trial
              </Button>

              <p>
                By singing up you agree to our{' '}
                <Link to="/terms">Terms of service</Link>
              </p>
              <p>
                Already have an account? <Link to="/signIn">Sign In</Link>
              </p>
            </form>
          </Grid>
        </Grid>
      </StyledSignUp>
    )
  }
}

export default SignUp
