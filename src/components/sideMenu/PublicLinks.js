import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'
import { StyledLinks } from './StyledLinks'

export const PublicLinks = () => (
  <StyledLinks>
    <StyledNavLink to={{ pathname: '/', state: { name: 'Home' } }}>
      <ListItem button className="list-item">
        <ListItemText primary="Home" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to={{ pathname: '/SignIn', state: { name: 'Sign In' } }}>
      <ListItem button className="list-item">
        <ListItemText primary="Sign In" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to={{ pathname: '/SignUp', state: { name: 'Sign Up' } }}>
      <ListItem button className="list-item">
        <Button variant="raised" color="primary" fullWidth>
          Try For Free
        </Button>
      </ListItem>
    </StyledNavLink>
  </StyledLinks>
)
