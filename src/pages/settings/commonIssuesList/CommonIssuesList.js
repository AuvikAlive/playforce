import React, { Component } from 'react'
import ModeEditIcon from '@material-ui/icons/ModeEdit'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListSubheader from '@material-ui/core/ListSubheader'
import { map } from 'lodash'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { AddButton } from '../../../components/addButton/AddButton'
import { EmptyListPlaceholder } from '../../../components/emptyListPlacehoder/EmptyListPlaceholder'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  groupCommonIssues,
  showContentWhenLoaded,
} from '../../../functions/'
import { StyledCommonIssuesList } from './StyledCommonIssuesList'
import { onComponentDidMount } from './onComponentDidMount'

export class CommonIssuesList extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { match, commonIssuesLoaded, commonIssues } = this.props
    const groupedCommonIssues = groupCommonIssues(commonIssues)
    const commonIssuesAdded = commonIssues.length > 0

    return showContentWhenLoaded(
      commonIssuesLoaded,
      <StyledCommonIssuesList className="StyledCommonIssuesList">
        <AddButton to={`${match.url}/add`} pulse={!commonIssuesAdded} />

        {commonIssuesAdded ? (
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
          <EmptyListPlaceholder text="Try adding a common issue to get started!" />
        )}
      </StyledCommonIssuesList>
    )
  }
}

CommonIssuesList.contextTypes = contextTypesTitleLeftNavUnsubscriber
