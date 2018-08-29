import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { Profile } from './Profile'

const mapStateToProps = ({ firebase }) => ({
  profile: firebase.profile,
})

const mapDispatchToProps = {
  updateProfile,
}

const enhance = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ProfileContainer = enhance(Profile)
