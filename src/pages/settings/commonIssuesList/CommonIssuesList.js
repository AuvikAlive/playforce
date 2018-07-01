import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ModeEditIcon from '@material-ui/icons/ModeEdit'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'
import { map } from 'lodash'
import { groupCommonIssues } from '../../../functions/groupCommonIssues'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledCommonIssuesList } from './StyledCommonIssuesList'

export class CommonIssuesList extends Component {
  async componentDidMount() {
    const { setNavTitle, setLeftNavComponent, addUnsubscriber } = this.context
    const {
      history,
      commonIssuesLoaded,
      fetchCommonIssuesRealTime,
      userId,
    } = this.props

    setNavTitle('Common Issues')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    !commonIssuesLoaded &&
      addUnsubscriber(await fetchCommonIssuesRealTime(userId))
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }
  render() {
    const { match, commonIssuesLoaded, commonIssues } = this.props

    const groupedCommonIssues = groupCommonIssues(commonIssues)

    return commonIssuesLoaded ? (
      <StyledCommonIssuesList className="StyledCommonIssuesList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add a standard"
            className={commonIssues.length > 0 ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {commonIssues.length > 0 ? (
          <Paper className="paper">
            {map(groupedCommonIssues, (value, key) => {
              return (
                <List
                  disablePadding
                  component="nav"
                  key={key}
                  subheader={
                    <ListSubheader color="primary" component="div">
                      {key}
                    </ListSubheader>
                  }
                >
                  {value.map(({ id, issue, finding }) => {
                    return (
                      <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                        <ListItem button>
                          <ListItemText primary={issue || finding} />
                          <ListItemIcon>
                            <ModeEditIcon />
                          </ListItemIcon>
                        </ListItem>
                      </StyledNavLink>
                    )
                  })}
                </List>
              )
            })}
          </Paper>
        ) : (
          <Typography variant="title" align="center">
            Try adding an item to get started!
          </Typography>
        )}
      </StyledCommonIssuesList>
    ) : (
      <LinearProgress />
    )
  }
}

CommonIssuesList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
