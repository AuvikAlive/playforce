import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import {
  renderAddImpactSurface,
  renderImpactTestDetailRoutes,
} from '../impactTestRoutes/functions/'
import {
  onComponentDidMount,
  renderImpactTestItems,
  renderEditImpactGeneralInfo,
} from './functions/'

class BaseStandaloneEditImpactTestRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    this.props.discardInspection()
  }

  render() {
    const { inspectionLoaded, match } = this.props

    return showContentWhenLoaded(
      inspectionLoaded,
      <Switch>
        <Route
          path={`${match.url}/edit/:id`}
          render={renderImpactTestDetailRoutes(this)}
        />

        <Route
          path={`${match.url}/add`}
          render={renderAddImpactSurface(this)}
        />

        <Route
          path={`${match.url}/general`}
          render={renderEditImpactGeneralInfo(this)}
        />

        <Route path={match.url} render={renderImpactTestItems(this)} />
      </Switch>
    )
  }
}

BaseStandaloneEditImpactTestRoutes.contextTypes = contextTypesUnsubscriber

export const StandaloneEditImpactTestRoutes = withFeedback(
  BaseStandaloneEditImpactTestRoutes
)
