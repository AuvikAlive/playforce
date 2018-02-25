import React from 'react'
import Grid from 'material-ui/Grid'
import { StyledContent } from './StyledContent'

export const Content = ({ classes, children }) => (
  <StyledContent container>
    <Grid item xs={12}>
      {children}
    </Grid>
  </StyledContent>
)

export default Content
