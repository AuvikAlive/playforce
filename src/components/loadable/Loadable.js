import React from 'react'
import Loadable from 'react-loadable'
import { CircularProgress } from 'material-ui/Progress'
import { StyledLoading } from './StyledLoading'

export default opts => {
  return Loadable(
    Object.assign(
      {
        loading() {
          return (
            <StyledLoading>
              <CircularProgress />
            </StyledLoading>
          )
        }
      },
      opts
    )
  )
}
