import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledImpactTestDetailItems } from './StyledImpactTestDetailItems'

export class ImpactTestDetailItems extends Component {
  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, openDialog, impactTest } = this.props

    setNavTitle(`Edit ${impactTest.surface.location}`)

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
      <IconButton
        color="inherit"
        aria-label="delete surface test"
        onClick={() => openDialog(this.delete)}
      >
        <DeleteIcon />
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

  showActionGoBack = message => {
    const { setFeedback, history } = this.props

    setFeedback({ success: message })
    history.goBack()
  }

  delete = async () => {
    const { inspectionId, userId, impactTest, deleteSurfaceTest } = this.props

    await deleteSurfaceTest(userId, inspectionId, impactTest)

    this.showActionGoBack(`${impactTest.surface.location} deleted!`)
  }

  render() {
    const { match, impactTest } = this.props

    return (
      <StyledImpactTestDetailItems className="StyledImpactTestDetailItems">
        <StyledNavLink to={`${match.url}/addDrop`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add drop test"
            className={
              impactTest &&
              impactTest.dropTests &&
              impactTest.dropTests.length > 0
                ? ''
                : 'pulse'
            }
          >
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
            {impactTest &&
              impactTest.dropTests &&
              impactTest.dropTests.map(({ id }) => (
                <StyledNavLink key={id} to={`${match.url}/editDrop/${id}`}>
                  <ListItem button>
                    <ListItemText primary={`Drop ${id}`} />
                  </ListItem>
                </StyledNavLink>
              ))}
          </List>
        </Paper>
      </StyledImpactTestDetailItems>
    )
  }
}

ImpactTestDetailItems.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
