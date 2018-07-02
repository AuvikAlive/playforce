import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { closeMenu } from '../../../functions/'
import { contextTypes } from './contextTypes'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  addInspections,
  removeInspections,
} from './functions/'
import { StyledDashboard } from './StyledDashboard'

export class Dashboard extends Component {
  state = {
    menuAnchor: null,
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    const { menuAnchor } = this.state

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

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu(this)}
          MenuListProps={{ disablePadding: true }}
        >
          <MenuItem onClick={addInspections(this)}>Add inspections</MenuItem>
          <MenuItem onClick={removeInspections(this)}>
            Remove inspections
          </MenuItem>
        </Menu>
      </StyledDashboard>
    )
  }
}

Dashboard.contextTypes = contextTypes
