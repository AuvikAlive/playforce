import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { StyledStandardList } from './StyledStandardList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class StandardsList extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, userId, fetchStandards } = this.props

    setNavTitle('Standards')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    fetchStandards(userId)
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }
  render() {
    const { match, standardsLoaded, standards } = this.props

    return standardsLoaded ? (
      <StyledStandardList className="StyledStandardList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add a standard"
            className={standards.length > 0 ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {standards.length > 0 ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {standards.map(({ id, code, title, date }) => {
                return (
                  <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                    <ListItem button>
                      <ListItemText primary={`${title} ${code}`} />
                      <ListItemIcon>
                        <ModeEditIcon />
                      </ListItemIcon>
                    </ListItem>
                  </StyledNavLink>
                )
              })}
            </List>
          </Paper>
        ) : (
          <Typography variant="title" align="center">
            Try adding an item to get started!
          </Typography>
        )}
      </StyledStandardList>
    ) : (
      <LinearProgress />
    )
  }
}

StandardsList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
