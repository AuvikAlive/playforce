import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import PlayingSurfaceList from '../playingSurfaceList/'
import {
  onComponentDidMount,
  renderAddPlayingSurface,
  renderEditPlayingSurface,
} from './functions/'

export class PlayingSurfaceRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const {
      inspectionLoaded,
      playingSurfacesLoaded,
      playingSurfaces,
      match,
    } = this.props

    const isLoaded = inspectionLoaded && playingSurfacesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route
          path={`${match.url}/add`}
          render={renderAddPlayingSurface(this)}
        />

        <Route
          path={`${match.url}/edit/:id`}
          render={renderEditPlayingSurface(this)}
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
}

PlayingSurfaceRoutes.contextTypes = contextTypesUnsubscriber
