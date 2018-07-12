import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import ConditionRatingList from '../conditionRatingList'
import { onComponentDidMount } from './onComponentDidMount'

const AddConditionRating = Loadable({
  loader: () => import('../addConditionRating'),
})

const EditConditionRating = Loadable({
  loader: () => import('../editConditionRating'),
})

AddConditionRating.preload()
EditConditionRating.preload()

export class ConditionRatingRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { inspectionLoaded, conditionRatingsLoaded, match } = this.props
    const isLoaded = inspectionLoaded && conditionRatingsLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route path={`${match.url}/add`} component={AddConditionRating} />
        <Route path={`${match.url}/edit/:id`} component={EditConditionRating} />
        <Route path={match.url} component={ConditionRatingList} />
      </Switch>
    )
  }
}

ConditionRatingRoutes.contextTypes = contextTypesUnsubscriber
