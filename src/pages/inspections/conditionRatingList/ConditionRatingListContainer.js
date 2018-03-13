import { connect } from 'react-redux'
import { compose } from 'redux'
import { ConditionRatingList } from './ConditionRatingList'

const mapStateToProps = ({ inspection: { conditionRatings } }) => ({
  conditionRatings,
})

export const ConditionRatingListContainer = compose(connect(mapStateToProps))(
  ConditionRatingList,
)
