import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledImpactTestDetailItems } from './StyledImpactTestDetailItems'

class ImpactTestDetailItemsWithout extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { mode, history } = this.props

    setNavTitle(`${mode} impact test`)

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
      <StyledImpactTestDetailItems className="StyledImpactTestDetailItems">
        <StyledNavLink to={`${match.url}/addDrop`} className="add-icon">
          <Button variant="fab" color="primary" aria-label="add impact test">
            <AddIcon />
          </Button>
        </StyledNavLink>
        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/surface`}>
              <ListItem button>
                <ListItemText primary="Surface Details" />
              </ListItem>
            </StyledNavLink>
          </List>

          <List
            component="nav"
            disablePadding
            subheader={<ListSubheader component="div">Drops</ListSubheader>}
          >
            <StyledNavLink to={`${match.url}/editDrop/123`}>
              <ListItem button>
                <ListItemText primary="Drop 1" />
              </ListItem>
            </StyledNavLink>
          </List>
        </Paper>
      </StyledImpactTestDetailItems>
    )
  }
}

export const ImpactTestDetailItems = withRouter(ImpactTestDetailItemsWithout)

ImpactTestDetailItemsWithout.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
