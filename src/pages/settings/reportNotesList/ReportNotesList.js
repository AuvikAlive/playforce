import React, { Component } from 'react'
import ModeEditIcon from '@material-ui/icons/ModeEdit'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Content } from '../../../components/content/Content'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { EmptyListPlaceholder } from '../../../components/emptyListPlacehoder/EmptyListPlaceholder'
import { ListAvatar } from '../../../components/listAvatar/ListAvatar'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'

export class ReportNotesList extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Report Notes')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { match, reportNotes } = this.props
    const reportNotesAdded = reportNotes.length > 0

    return (
      <Content>
        <AddButton to={`${match.url}/add`} pulse={!reportNotesAdded} />

        {reportNotesAdded ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {reportNotes.map(({ id, number, title }) => {
                return (
                  <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                    <ListItem button>
                      <ListAvatar text={number} />
                      <ListItemText primary={title} />
                      <ListItemIcon>
                        <ModeEditIcon />
                      </ListItemIcon>
                    </ListItem>
                  </StyledNavLink>
                )
              })}
            </List>
          </Paper>
        ) : (
          <EmptyListPlaceholder text="Try adding a report note to get started!" />
        )}
      </Content>
    )
  }
}

ReportNotesList.contextTypes = contextTypesTitleLeftNavUnsubscriber
