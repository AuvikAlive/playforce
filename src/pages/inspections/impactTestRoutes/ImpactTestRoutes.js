import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { LinearProgress } from 'material-ui/Progress'
import { ImpactTestItems } from '../impactTestItems/ImpactTestItems'
import Loadable from '../../../components/loadable/LoadableLinear'

const EditImpactGeneralInfo = Loadable({
  loader: () => import('../editImpactGeneralInfo'),
})

const AddImpactTest = Loadable({
  loader: () => import('../addImpactTest'),
})

const EditImpactTest = Loadable({
  loader: () => import('../editImpactTest'),
})

EditImpactGeneralInfo.preload()
AddImpactTest.preload()
EditImpactTest.preload()

export class ImpactTestRoutes extends Component {
  async componentDidMount() {
    const {
      inspectionId,
      userId,
      inspectionLoaded,
      fetchInspectionRealTime,
    } = this.props

    const { addUnsubscriber } = this.context

    !inspectionLoaded &&
      inspectionId &&
      addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
  }
  render() {
    const { inspectionLoaded, match } = this.props

    return inspectionLoaded ? (
      <Switch>
        <Route
          path={`${match.url}/general`}
          component={EditImpactGeneralInfo}
        />
        <Route path={`${match.url}/addTest`} component={AddImpactTest} />
        <Route path={`${match.url}/editTest/:id`} component={EditImpactTest} />
        <Route path={match.url} component={ImpactTestItems} />
      </Switch>
    ) : (
      <LinearProgress />
    )
  }
}

ImpactTestRoutes.contextTypes = {
  addUnsubscriber: PropTypes.func,
}
