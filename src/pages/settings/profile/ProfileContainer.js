import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { Profile } from './Profile'

const mapStateToProps = ({
  firebase: {
    profile,
    auth: { uid },
  },
}) => ({
  profile,
  uid,
})

export const ProfileContainer = compose(
  withImageCapture,
  withFeedback,
  connect(mapStateToProps)
)(Profile)
