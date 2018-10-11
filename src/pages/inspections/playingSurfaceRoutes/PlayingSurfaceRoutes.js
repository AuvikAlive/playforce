import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PlayingSurfaceList from '../playingSurfaceList/'
import { renderAddPlayingSurface, renderEditPlayingSurface } from './functions/'

export const PlayingSurfaceRoutes = props => {
  const { playingSurfaces, match } = props

  return (
    <Switch>
      <Route
        path={`${match.url}/add`}
        render={renderAddPlayingSurface({ props })}
      />

      <Route
        path={`${match.url}/edit/:id`}
        render={renderEditPlayingSurface({ props })}
      />

      <Route
        path={match.url}
        render={routerProps => (
          <PlayingSurfaceList {...{ playingSurfaces }} {...routerProps} />
        )}
      />
    </Switch>
  )
}
