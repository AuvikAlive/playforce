import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { StyledDashboard } from './StyledDashboard'

export class Dashboard extends Component {
  state = {
    menuAnchor: null,
  }

  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, id } = this.props

    setNavTitle(`Manage ${id}`)

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )

    setRightNavComponent(
      <IconButton color="inherit" aria-label="More" onClick={this.openMenu}>
        <MoreVertIcon aria-label="More" />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
    } = this.context

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()
  }

  openMenu = event => {
    this.setState({ menuAnchor: event.currentTarget })
  }

  closeMenu = () => {
    this.setState({ menuAnchor: null })
  }

  addInspections = () => {
    this.closeMenu()

    const { history, match } = this.props

    history.push(`${match.url}/add`)
  }

  removeInspections = () => {
    this.closeMenu()

    const { history, match } = this.props

    history.push(`${match.url}/remove`)
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
          onClose={this.closeMenu}
          MenuListProps={{ disablePadding: true }}
        >
          <MenuItem onClick={this.addInspections}>Add inspections</MenuItem>
          <MenuItem onClick={this.removeInspections}>
            Remove inspections
          </MenuItem>
        </Menu>
      </StyledDashboard>
    )
  }
}

Dashboard.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
