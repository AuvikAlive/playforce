import React from 'react'
import Loadable from 'react-loadable'

export default opts => {
  return Loadable(
    Object.assign(
      {
        loading() {
          return <div>Loading...</div>
        }
      },
      opts
    )
  )
}
