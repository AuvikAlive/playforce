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
    const {
      inspectionLoaded,
      conditionRatingsLoaded,
      conditionRatings,
      addConditionRating,
      updateConditionRating,
      deleteConditionRating,
      userId,
      inspectionId,
      match,
    } = this.props

    const isLoaded = inspectionLoaded && conditionRatingsLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route
          path={`${match.url}/add`}
          render={props => (
            <AddConditionRating
              addConditionRating={data =>
                addConditionRating(userId, inspectionId, data)
              }
              {...props}
            />
          )}
        />

        <Route
          path={`${match.url}/edit/:id`}
          render={props => (
            <EditConditionRating
              updateConditionRating={data =>
                updateConditionRating(
                  userId,
                  inspectionId,
                  props.match.params.id,
                  data
                )
              }
              deleteConditionRating={() =>
                deleteConditionRating(
                  userId,
                  inspectionId,
                  props.match.params.id
                )
              }
              {...{
                conditionRatings,
              }}
              {...props}
            />
          )}
        />

        <Route
          path={match.url}
          render={props => (
            <ConditionRatingList {...{ conditionRatings }} {...props} />
          )}
        />
      </Switch>
    )
  }
}

ConditionRatingRoutes.contextTypes = contextTypesUnsubscriber
