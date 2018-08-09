import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import PlayingSurfaceList from '../playingSurfaceList/'
import { onComponentDidMount } from './onComponentDidMount'

const AddPlayingSurface = Loadable({
  loader: () => import('../addPlayingSurface'),
})

const EditPlayingSurface = Loadable({
  loader: () => import('../editPlayingSurface'),
})

AddPlayingSurface.preload()
EditPlayingSurface.preload()

export class PlayingSurfaceRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { inspectionLoaded, playingSurfacesLoaded, match } = this.props
    const isLoaded = inspectionLoaded && playingSurfacesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route path={`${match.url}/add`} component={AddPlayingSurface} />

        <Route path={`${match.url}/edit/:id`} component={EditPlayingSurface} />

        <Route path={match.url} component={PlayingSurfaceList} />
      </Switch>
    )
  }
}

PlayingSurfaceRoutes.contextTypes = contextTypesUnsubscriber
