import React from 'react'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export const ListView = ({ sites }) => {
  return sites.length > 0 ? (
    <Paper className="paper">
      <List component="nav" disablePadding>
        {sites.map(({ name, id }, index, list) => {
          return (
            <StyledNavLink key={id} to={`/sites/${id}`}>
              <ListItem divider button>
                <ListItemText primary={name} />
              </ListItem>
            </StyledNavLink>
          )
        })}
      </List>
    </Paper>
  ) : (
    <Typography variant="title" align="center">
      Try adding a site to get started!
    </Typography>
  )
}
