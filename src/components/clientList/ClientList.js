import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ModeEditIcon from '@material-ui/icons/ModeEdit'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'
import { EmptyListPlaceholder } from '../emptyListPlacehoder/EmptyListPlaceholder'

export const ClientList = ({ clients, match }) => {
  return clients.length > 0 ? (
    <Paper>
      <List component="nav" disablePadding>
        {clients.map(({ id, name }) => {
          return (
            <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
              <ListItem button>
                <ListItemText primary={name} />
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
    <EmptyListPlaceholder text="Try adding a client to get started!" />
  )
}
