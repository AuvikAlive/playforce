import React from 'react'
import { StyledContent } from './StyledContent'

export const Content = ({ className, children }) => (
  <StyledContent container className={`${className} StyledContent`}>
    {children}
  </StyledContent>
)
