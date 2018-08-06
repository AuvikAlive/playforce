import React from 'react'
import Typography from '@material-ui/core/Typography'
import { StyledAvailablePlaceholders } from './StyledAvailablePlaceholders'

export const AvailablePlaceholders = ({ placeholders }) => {
  return (
    <StyledAvailablePlaceholders className="StyledAvailablePlaceholders">
      <Typography variant="title" gutterBottom>
        Available placeholders
      </Typography>

      {placeholders.map(({ name, value }) => (
        <Typography variant="subheading" key={value}>
          {`- ${name} = <<${value}>>`}
        </Typography>
      ))}
    </StyledAvailablePlaceholders>
  )
}
