import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { PreimplementationRecommendation } from './PreimplementationRecommendation'

const mapStateToProps = ({
  firebase: {
    profile: { preimplementationRecommendation },
  },
}) => ({
  preimplementationRecommendation,
})

const mapDispatchToProps = { updateProfile }

export const PreimplementationRecommendationContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PreimplementationRecommendation)
