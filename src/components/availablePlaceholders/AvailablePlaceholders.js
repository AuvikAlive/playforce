import React from "react"
import Typography from "@material-ui/core/Typography"
import { StyledAvailablePlaceholders } from "./StyledAvailablePlaceholders"

export const AvailablePlaceholders = ({ placeholders }) => {
  return (
    <StyledAvailablePlaceholders className="StyledAvailablePlaceholders">
      <Typography variant="h6" gutterBottom>
        Available placeholders
      </Typography>

      {placeholders.map(({ name, value }) => (
        <Typography variant="subtitle1" key={value}>
          {`- ${name} = <<${value}>>`}
        </Typography>
      ))}
    </StyledAvailablePlaceholders>
  )
}
