import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import InspectionList from '../inspectionList'

const AddInspection = Loadable({
  loader: () => import('../addInspection'),
})

AddInspection.preload()

class InspectionTabRoutesWithout extends Component {
  render() {
    const { match } = this.props

    return (
      <Switch>
        <Route
          path={match.url + '/addInspection'}
          render={() => <AddInspection {...this.props} />}
        />
        <Route
          path={match.url}
          render={() => <InspectionList {...this.props} />}
        />
      </Switch>
    )
  }
}

export const InspectionTabRoutes = withRouter(InspectionTabRoutesWithout)
