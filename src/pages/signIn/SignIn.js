import React from 'react'
import Grid from 'material-ui/Grid'
import Media from 'react-media'
import { StyledSignIn } from './StyledSignIn'
import Form from './FormContainer'

const SignIn = () => (
  <StyledSignIn>
    <Grid container spacing={0} className="container">
      <Media query="(orientation: portrait)">
        {matches =>
          matches ? (
            <Grid item xs={12}>
              <Form />
            </Grid>
          ) : (
            <Grid item xs={4}>
              <Form />
            </Grid>
          )
        }
      </Media>
    </Grid>
  </StyledSignIn>
)

export default SignIn
