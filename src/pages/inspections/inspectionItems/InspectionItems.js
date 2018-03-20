import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import { StyledInspectionItems } from './StyledInspectionItems'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class InspectionItems extends Component {
  state = {}

  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, openModal } = this.props

    setNavTitle('Add Inspection')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>,
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

  publish = () => {
    console.log('publish')
  }

  delete = () => {
    const { discardInspection, history } = this.props

    discardInspection()
    history.goBack()
  }

  render() {
    const { match } = this.props

    return (
      <StyledInspectionItems className="StyledInspectionItems">
        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/cover`}>
              <ListItem button>
                <ListItemText primary="Cover" />
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/auditSummary`}>
              <ListItem button>
                <ListItemText primary="Audit Summary" />
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/conditionRating`}>
              <ListItem button>
                <ListItemText primary="Condition Rating" />
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/complianceIssues`}>
              <ListItem button>
                <ListItemText primary="Identified Compliance Issues" />
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/maintenanceIssues`}>
              <ListItem button>
                <ListItemText primary="Identified Maintenance Issues" />
              </ListItem>
            </StyledNavLink>

            <ListItem>
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.publish}
              >
                Publish
              </Button>
            </ListItem>
          </List>
        </Paper>
      </StyledInspectionItems>
    )
  }
}

InspectionItems.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
