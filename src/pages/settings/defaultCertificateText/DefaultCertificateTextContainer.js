import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { DefaultCertificateText } from './DefaultCertificateText'

const mapStateToProps = ({
  firebase: {
    profile: { defaultCertificateText },
  },
}) => ({
  defaultCertificateText,
})

const mapDispatchToProps = { updateProfile }

export const DefaultCertificateTextContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DefaultCertificateText)
