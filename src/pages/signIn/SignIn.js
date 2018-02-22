import React from 'react'
import Grid from 'material-ui/Grid'
import Media from 'react-media'
import Form from './FormContainer'

const SignIn = () => (
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
)

export default SignIn
