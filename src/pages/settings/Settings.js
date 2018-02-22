import React from 'react'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Content from '../../components/content/Content'
import { StyledSettings } from './StyledSettings'

const Settings = () => (
  <StyledSettings>
    <Content>
      <Paper elevation={4} className="paper">
        <Grid container spacing={0} className="container">
          <Grid item xs={4} className="left">
            Settings
          </Grid>
          <Grid item xs={4} className="right" />
        </Grid>
      </Paper>
    </Content>
  </StyledSettings>
)

export default Settings
