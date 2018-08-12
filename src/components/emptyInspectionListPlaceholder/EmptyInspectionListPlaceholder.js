import React from 'react'
import { EmptyListPlaceholder } from '../emptyListPlacehoder/EmptyListPlaceholder'

export const EmptyInspectionListPlaceholder = ({ text }) => {
  return (
    <EmptyListPlaceholder
      text={text || 'Try adding an inspection to get started!'}
    />
  )
}
