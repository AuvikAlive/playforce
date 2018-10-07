import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import ConditionRatingList from '../conditionRatingList'
import {
  onComponentDidMount,
  renderAddConditionRating,
  renderEditConditionRating,
} from './functions/'

export class ConditionRatingRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const {
      inspectionLoaded,
      // conditionRatingsLoaded,
      conditionRatings,
      match,
    } = this.props

    // const isLoaded = inspectionLoaded && conditionRatingsLoaded

    return showContentWhenLoaded(
      inspectionLoaded,
      <Switch>
        <Route
          path={`${match.url}/add`}
          render={renderAddConditionRating(this)}
        />

        <Route
          path={`${match.url}/edit/:id`}
          render={renderEditConditionRating(this)}
        />

        <Route
          path={match.url}
          render={routerProps => (
            <ConditionRatingList {...{ conditionRatings }} {...routerProps} />
          )}
        />
      </Switch>
    )
  }
}

ConditionRatingRoutes.contextTypes = contextTypesUnsubscriber
