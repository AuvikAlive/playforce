import { connect } from 'react-redux'
import { compose } from 'redux'
import { ConditionRating } from './ConditionRating'

export const ConditionRatingContainer = compose(
  connect(({ firebase: { profile } }) => ({ profile })),
)(ConditionRating)
