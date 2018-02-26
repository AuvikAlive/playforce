import React from 'react'
import Typography from 'material-ui/Typography'
import { StyledInspections } from './StyledInspections'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

export const Inspections = () => (
  <StyledInspections>
    <Typography variant="title" align="center">
      Try adding an inspection to get started!
    </Typography>
    <Button
      variant="fab"
      color="primary"
      aria-label="add inspection"
      className="add-icon pulse"
    >
      <AddIcon />
    </Button>
  </StyledInspections>
)
