import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'
import { StyledLinks } from './StyledLinks'

export const PublicLinks = () => (
  <StyledLinks>
    {/* <StyledNavLink to={{ pathname: '/', state: { name: 'Home' } }}>
      <ListItem button className="list-item">
        <ListItemText primary="Home" />
      </ListItem>
    </StyledNavLink> */}

    <StyledNavLink to={{ pathname: '/signIn', state: { name: 'Sign In' } }}>
      <ListItem button className="list-item">
        <ListItemText primary="Sign In" />
      </ListItem>
    </StyledNavLink>

    <StyledNavLink to={{ pathname: '/signUp', state: { name: 'Sign Up' } }}>
      <ListItem button className="list-item">
        <Button variant="contained" color="primary" fullWidth>
          Try For Free
        </Button>
      </ListItem>
    </StyledNavLink>
  </StyledLinks>
)
