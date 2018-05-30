import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
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
    const { match } = this.props

    return (
      <StyledImpactTestItems className="StyledImpactTestItems">
        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/general`}>
              <ListItem button>
                <ListItemText primary="General Info" />
              </ListItem>
            </StyledNavLink>
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
