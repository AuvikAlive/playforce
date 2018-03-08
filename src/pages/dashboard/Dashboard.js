import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import { StyledDashboard } from './StyledDashboard'

class Dashboard extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Dashboard')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }
  render() {
    return (
      <StyledDashboard className="StyledDashboard">
        <Typography variant="display1" align="center" className="title">
          Dashboard
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Paper className="paper">Tile</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="paper">Tile</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="paper">Tile</Paper>
          </Grid>
        </Grid>
      </StyledDashboard>
    )
  }
}

export default Dashboard

Dashboard.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
