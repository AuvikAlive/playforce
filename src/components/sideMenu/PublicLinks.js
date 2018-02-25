import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'

export const PublicLinks = () => (
  <div>
    <StyledNavLink to={{ pathname: '/', state: { name: 'Home' } }}>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to={{ pathname: '/SignIn', state: { name: 'Sign In' } }}>
      <ListItem button>
        <ListItemText primary="Sign In" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to={{ pathname: '/SignUp', state: { name: 'Sign Up' } }}>
      <ListItem button>
        <Button variant="raised" color="primary" fullWidth>
          Try For Free
        </Button>
      </ListItem>
    </StyledNavLink>
  </div>
)
