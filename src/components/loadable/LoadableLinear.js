import React from 'react'
import Loadable from 'react-loadable'
import LinearProgress from '@material-ui/core/LinearProgress'

export default opts => {
  return Loadable(
    Object.assign(
      {
        loading() {
          return <LinearProgress />
        }
      },
      opts
    )
  )
}
