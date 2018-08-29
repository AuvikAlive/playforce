import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { SidenavBackground } from './SidenavBackground'

const mapDispatchToProps = { updateProfile }

const enhance = compose(
  withFeedback,
  connect(
    null,
    mapDispatchToProps
  )
)

export const SidenavBackgroundContainer = enhance(SidenavBackground)
