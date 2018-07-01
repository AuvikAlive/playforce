import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

export const showContentWhenLoaded = (isLoaded, component) =>
  isLoaded ? component : <LinearProgress />
