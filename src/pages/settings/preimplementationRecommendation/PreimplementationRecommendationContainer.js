import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { PreimplementationRecommendation } from './PreimplementationRecommendation'

const mapStateToProps = ({ firebase }) => ({
  preimplementationRecommendation:
    firebase.profile.preimplementationRecommendation,
})

const mapDispatchToProps = { updateProfile }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const PreimplementationRecommendationContainer = enhance(
  PreimplementationRecommendation
)
