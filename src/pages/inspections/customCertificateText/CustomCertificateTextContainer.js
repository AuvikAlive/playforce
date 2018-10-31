import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  saveCustomCertificateText,
} from '../../../store/actions/actionCreators/inspectionActions'
import { CustomCertificateText } from './CustomCertificateText'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { auth, profile } = firebase

  const {
    id,
    inspectionLoaded,
    customCertificateText,
    customInspectionNumber,
    name,
    cover,
  } = inspection

  return {
    userId: auth.uid,
    inspectionId: id,
    defaultCertificateText: profile.defaultCertificateText,
    inspectionLoaded,
    customCertificateText,
    customInspectionNumber,
    name,
    client: cover.client,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  saveCustomCertificateText,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const CustomCertificateTextContainer = enhance(CustomCertificateText)
