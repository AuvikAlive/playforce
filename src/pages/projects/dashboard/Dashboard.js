import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { StyledDashboard } from './StyledDashboard'

export class Dashboard extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Dashboard')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
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
          <Grid item xs={12} sm={6}>
            <Paper className="paper">Tile</Paper>
          </Grid>
        </Grid>
      </StyledDashboard>
    )
  }
}

Dashboard.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
