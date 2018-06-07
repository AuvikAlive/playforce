import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import AddIcon from 'material-ui-icons/Add'
import DeleteIcon from 'material-ui-icons/Delete'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledImpactTestItems } from './StyledImpactTestItems'

export class ImpactTestItems extends Component {
  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, openDialog } = this.props

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

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
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
    const { inspectionId, userId, impactTests, deleteImpactTest } = this.props

    await deleteImpactTest(userId, inspectionId, impactTests)

    this.showActionGoBack('Impact test deleted!')
  }

  render() {
    const { match, impactTests } = this.props

    return (
      <StyledImpactTestItems className="StyledImpactTestItems">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add impact test"
            className={!!impactTests && impactTests.length > 0 ? '' : 'pulse'}
          >
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
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
