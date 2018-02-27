import React from 'react'
import Loadable from 'react-loadable'
import { CircularProgress } from 'material-ui/Progress'
import { StyledLoadableCircular } from './StyledLoadableCircular'

export default opts => {
  return Loadable(
    Object.assign(
      {
        loading() {
          return (
            <StyledLoadableCircular>
              <CircularProgress />
            </StyledLoadableCircular>
          )
        },
      },
      opts,
    ),
  )
}
