import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'

export const PublicLinks = () => (
  <div>
    <StyledNavLink to="/">
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to="/signIn">
      <ListItem button>
        <ListItemText primary="Sign In" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to="/signUp">
      <ListItem button>
        <Button variant="raised" color="primary" fullWidth>
          Try For Free
        </Button>
      </ListItem>
    </StyledNavLink>
  </div>
)
