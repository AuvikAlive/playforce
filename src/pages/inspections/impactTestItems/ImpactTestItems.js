import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import AddIcon from 'material-ui-icons/Add'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledImpactTestItems } from './StyledImpactTestItems'

export class ImpactTestItems extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Impact Testing')

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
    const { match, impactTests } = this.props

    return (
      <StyledImpactTestItems className="StyledImpactTestItems">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button variant="fab" color="primary" aria-label="add impact test">
            <AddIcon />
          </Button>
        </StyledNavLink>
        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/general`}>
              <ListItem button>
                <ListItemText primary="General Info" />
              </ListItem>
            </StyledNavLink>
          </List>

          <List
            component="nav"
            disablePadding
            subheader={<ListSubheader component="div">Tests</ListSubheader>}
          >
            {impactTests.map(({ id, surface: { location } }) => (
              <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                <ListItem button>
                  <ListItemText primary={location} />
                </ListItem>
              </StyledNavLink>
            ))}
          </List>
        </Paper>
      </StyledImpactTestItems>
    )
  }
}

ImpactTestItems.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
