import React from 'react'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import { StyledFooter } from './StyledFooter'

export const Footer = () => (
  <StyledFooter>
    <Toolbar className="toolbar">
      <Typography variant="caption" align="center">
        © 2018 Play Force Pty Ltd
      </Typography>
    </Toolbar>
  </StyledFooter>
)
