import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { LinearProgress } from 'material-ui/Progress'
import { ImpactTestItemsContainer } from '../impactTestItems/ImpactTestItemsContainer'
import Loadable from '../../../components/loadable/LoadableLinear'

const EditImpactGeneralInfo = Loadable({
  loader: () => import('../editImpactGeneralInfo'),
})

const AddImpactAttenuationTest = Loadable({
  loader: () => import('../addImpactAttenuationTest'),
})

const EditImpactTest = Loadable({
  loader: () => import('../editImpactTest'),
})

const AddImpactSurface = Loadable({
  loader: () => import('../addImpactSurface'),
})

EditImpactGeneralInfo.preload()
AddImpactAttenuationTest.preload()
EditImpactTest.preload()
AddImpactSurface.preload()

export class ImpactTestRoutes extends Component {
  async componentDidMount() {
    const {
      inspectionId,
      userId,
      inspectionLoaded,
      fetchInspectionRealTime,
      impactTestsLoaded,
      fetchImpactTestsRealTime,
    } = this.props

    const { addUnsubscriber } = this.context

    !inspectionLoaded &&
      inspectionId &&
      addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
    !impactTestsLoaded &&
      inspectionId &&
      addUnsubscriber(await fetchImpactTestsRealTime(userId, inspectionId))
  }
  render() {
    const { inspectionLoaded, match } = this.props

    return inspectionLoaded ? (
      <Switch>
        <Route
          path={`${match.url}/general`}
          component={EditImpactGeneralInfo}
        />
        <Route
          path={`${match.url}/addAttenuationTest`}
          component={AddImpactAttenuationTest}
        />
        <Route path={`${match.url}/edit/:id`} component={EditImpactTest} />
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
