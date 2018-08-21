import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import PlaygroundList from '../playgroundList/'
import { onComponentDidMount } from './onComponentDidMount'

const AddPlayground = Loadable({
  loader: () => import('../addPlayground'),
})

export class PlaygroundRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { inspectionLoaded, playgroundsLoaded, match } = this.props
    const isLoaded = inspectionLoaded && playgroundsLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route path={`${match.url}/add`} component={AddPlayground} />
        <Route path={match.url} component={PlaygroundList} />
      </Switch>
    )
  }
}

PlaygroundRoutes.contextTypes = contextTypesUnsubscriber
