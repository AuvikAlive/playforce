import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import { ImpactTestItemsContainer } from '../impactTestItems/ImpactTestItemsContainer'
import Loadable from '../../../components/loadable/LoadableLinear'

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
  async componentDidMount() {
    const {
      inspectionId,
      userId,
      inspectionLoaded,
      fetchInspectionRealTime,
      impactTestsLoaded,
      fetchImpactTests,
    } = this.props

    const { addUnsubscriber } = this.context

    !inspectionLoaded &&
      inspectionId &&
      addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
    !impactTestsLoaded && inspectionId && fetchImpactTests(userId, inspectionId)
  }
  render() {
    const { inspectionLoaded, impactTestsLoaded, match } = this.props

    return inspectionLoaded && impactTestsLoaded ? (
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
    ) : (
      <LinearProgress />
    )
  }
}

ImpactTestRoutes.contextTypes = {
  addUnsubscriber: PropTypes.func,
}
