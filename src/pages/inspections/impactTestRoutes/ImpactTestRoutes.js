import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import { ImpactTestItemsContainer } from '../impactTestItems/ImpactTestItemsContainer'
import { onComponentDidMount } from './onComponentDidMount'

const EditImpactGeneralInfo = Loadable({
  loader: () => import('../editImpactGeneralInfo'),
})

const AddImpactAttenuationTest = Loadable({
  loader: () => import('../addImpactAttenuationTest'),
})

const ImpactTestDetailRoutes = Loadable({
  loader: () => import('../impactTestDetailRoutes'),
})

const AddImpactSurface = Loadable({
  loader: () => import('../addImpactSurface'),
})

EditImpactGeneralInfo.preload()
AddImpactAttenuationTest.preload()
ImpactTestDetailRoutes.preload()
AddImpactSurface.preload()

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
          path={`${match.url}/general`}
          component={EditImpactGeneralInfo}
        />
        <Route
          path={`${match.url}/addAttenuationTest`}
          component={AddImpactAttenuationTest}
        />
        <Route
          path={`${match.url}/edit/:id`}
          component={ImpactTestDetailRoutes}
        />
        <Route path={`${match.url}/add`} component={AddImpactSurface} />
        <Route path={match.url} component={ImpactTestItemsContainer} />
      </Switch>
    )
  }
}

ImpactTestRoutes.contextTypes = contextTypesUnsubscriber
