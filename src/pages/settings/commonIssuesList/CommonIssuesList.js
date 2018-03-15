import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { StyledCommonIssuesList } from './StyledCommonIssuesList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class CommonIssuesList extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Common Issues')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
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
            className={commonIssues ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {commonIssues ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {commonIssues.map(({ id, title }) => {
                return (
                  <StyledNavLink key={id} to={`${match.url}/${id}`}>
                    <ListItem button>
                      <ListItemText primary={title} />
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
