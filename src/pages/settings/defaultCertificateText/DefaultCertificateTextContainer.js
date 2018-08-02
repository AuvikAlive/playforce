import { connect } from 'react-redux'
import { compose } from 'redux'
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DefaultCertificateText)
