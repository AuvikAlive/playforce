import React from 'react'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import { StyledSignUp } from './StyledSignUp'
import { Logo } from '../../components/logo/Logo'

const SignUp = () => (
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
          />

          <TextField
            id="email"
            label="Email"
            type="email"
            margin="normal"
            fullWidth
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
          />

          <Button variant="raised" color="primary">
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

export default SignUp
