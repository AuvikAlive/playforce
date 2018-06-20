import React from 'react'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { StyledFooter } from './StyledFooter'

export const Footer = () => (
  <StyledFooter>
    <Toolbar className="toolbar">
      <Typography variant="caption" align="center">
      © Play Force Pty Ltd
      </Typography>
    </Toolbar>
  </StyledFooter>
)
