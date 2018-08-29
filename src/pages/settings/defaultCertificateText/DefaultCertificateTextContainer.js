import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateProfile } from '../../../store/actions/actionCreators/profileActions'
import { DefaultCertificateText } from './DefaultCertificateText'

const mapStateToProps = ({ firebase }) => ({
  defaultCertificateText: firebase.profile.defaultCertificateText,
})

const mapDispatchToProps = { updateProfile }

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const DefaultCertificateTextContainer = enhance(DefaultCertificateText)
