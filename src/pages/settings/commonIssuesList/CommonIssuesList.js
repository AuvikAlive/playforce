import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { StyledCommonIssuesList } from './StyledCommonIssuesList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class CommonIssuesList extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, firestore, userId } = this.props

    setNavTitle('Common Issues')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'commonIssues' }],
    })
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context
    const { firestore, userId } = this.props

    removeNavTitle()
    removeLefNavComponent()

    firestore.unsetListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'commonIssues' }],
    })
  }
  render() {
    const { match, commonIssues } = this.props

    return (
      <StyledCommonIssuesList className="StyledCommonIssuesList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add a standard"
            className={commonIssues.length === 0 ? 'pulse' : ''}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {commonIssues.length === 0 ? (
          <Typography variant="title" align="center">
            Try adding an item to get started!
          </Typography>
        ) : (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {commonIssues.map(({ id, finding }) => {
                return (
                  <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                    <ListItem button>
                      <ListItemText primary={finding} />
                      <ListItemIcon>
                        <ModeEditIcon />
                      </ListItemIcon>
                    </ListItem>
                  </StyledNavLink>
                )
              })}
            </List>
          </Paper>
        )}
      </StyledCommonIssuesList>
    )
  }
}

CommonIssuesList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}