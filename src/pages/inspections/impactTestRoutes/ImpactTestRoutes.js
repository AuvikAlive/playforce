import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import {
  onComponentDidMount,
  renderImpactTestItems,
  renderAddImpactAttenuationTest,
  renderEditImpactGeneralInfo,
  renderAddImpactSurface,
  renderImpactTestDetailRoutes,
} from './functions/'

export class ImpactTestRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
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
