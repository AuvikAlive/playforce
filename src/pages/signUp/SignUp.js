import React from 'react'
import Grid from 'material-ui/Grid'
import Media from 'react-media'
import Form from './FormContainer'

const SignUp = () => (
  <Grid container spacing={0} className="container">
    <Media query="(orientation: portrait)">
      {matches =>
        matches ? (
          <Grid item xs={12}>
            <Form />
          </Grid>
        ) : (
          [
            <Grid key="left" item xs={8} className="left" />,
            <Grid key="right" item xs={4}>
              <Form />
            </Grid>
          ]
        )
      }
    </Media>
  </Grid>
)

export default SignUp
