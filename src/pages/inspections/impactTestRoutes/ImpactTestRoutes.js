import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import {
  onComponentDidMount,
  renderImpactTestItems,
  renderAddImpactAttenuationTest,
  renderEditImpactGeneralInfo,
  renderAddImpactSurface,
} from './functions/'

const ImpactTestDetailRoutes = Loadable({
  loader: () => import('../impactTestDetailRoutes'),
})

ImpactTestDetailRoutes.preload()

export class ImpactTestRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { inspectionLoaded, impactTestsLoaded, match } = this.props
    const isLoaded = inspectionLoaded && impactTestsLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route
          path={`${match.url}/edit/:id`}
          component={ImpactTestDetailRoutes}
        />

        <Route
          path={`${match.url}/add`}
          render={renderAddImpactSurface(this)}
        />

        <Route
          path={`${match.url}/general`}
          render={renderEditImpactGeneralInfo(this)}
        />

        <Route
          path={`${match.url}/addAttenuationTest`}
          render={renderAddImpactAttenuationTest(this)}
        />

        <Route path={match.url} render={renderImpactTestItems(this)} />
      </Switch>
    )
  }
}

ImpactTestRoutes.contextTypes = contextTypesUnsubscriber
