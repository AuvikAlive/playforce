import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import Loadable from '../../../components/loadable/LoadableLinear'
import ConditionRatingList from '../conditionRatingList'

const AddConditionRating = Loadable({
  loader: () => import('../addConditionRating'),
})

const EditConditionRating = Loadable({
  loader: () => import('../editConditionRating'),
})

AddConditionRating.preload()
EditConditionRating.preload()

export class ConditionRatingRoutes extends Component {
  async componentDidMount() {
    const {
      inspectionId,
      userId,
      inspectionLoaded,
      fetchInspectionRealTime,
      conditionRatingsLoaded,
      fetchConditionRatings,
    } = this.props

    const { addUnsubscriber } = this.context

    !inspectionLoaded &&
      inspectionId &&
      addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
    !conditionRatingsLoaded &&
      addUnsubscriber(await fetchConditionRatings(userId, inspectionId))
  }

  render() {
    const { inspectionLoaded, conditionRatingsLoaded, match } = this.props

    return inspectionLoaded && conditionRatingsLoaded ? (
      <Switch>
        <Route path={`${match.url}/add`} component={AddConditionRating} />
        <Route path={`${match.url}/edit/:id`} component={EditConditionRating} />
        <Route path={match.url} component={ConditionRatingList} />
      </Switch>
    ) : (
      <LinearProgress />
    )
  }
}

ConditionRatingRoutes.contextTypes = {
  addUnsubscriber: PropTypes.func,
}
