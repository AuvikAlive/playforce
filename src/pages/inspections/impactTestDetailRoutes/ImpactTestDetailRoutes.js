import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { compose } from 'recompose'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  renderImpactTestDetailItems,
  renderEditImpactSurface,
  renderEditImpactComment,
  renderAddDropTest,
  renderEditDropTest,
} from './functions/'

const BaseImpactTestDetailRoutes = props => {
  const { match } = props

  return (
    <Switch>
      <Route
        path={`${match.url}/editDrop/:id`}
        render={renderEditDropTest(props)}
      />

      <Route path={`${match.url}/addDrop`} render={renderAddDropTest(props)} />

      <Route
        path={`${match.url}/comment`}
        render={renderEditImpactComment(props)}
      />

      <Route
        path={`${match.url}/surface`}
        render={renderEditImpactSurface(props)}
      />

      <Route path={match.url} render={renderImpactTestDetailItems(props)} />
    </Switch>
  )
}

const enhance = compose(withFeedback)

export const ImpactTestDetailRoutes = enhance(BaseImpactTestDetailRoutes)
