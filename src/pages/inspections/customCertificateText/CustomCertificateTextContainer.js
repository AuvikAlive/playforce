import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  saveCustomCertificateText,
} from '../../../store/actions/actionCreators/inspectionActions'
import { CustomCertificateText } from './CustomCertificateText'

const mapStateToProps = (
  {
    firebase: {
      profile: { defaultCertificateText },
      auth: { uid },
    },
    inspection: {
      inspectionLoaded,
      customCertificateText,
      customInspectionNumber,
      name,
      cover: { client },
    },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  defaultCertificateText,
  userId: uid,
  inspectionId: id,
  inspectionLoaded,
  customCertificateText,
  customInspectionNumber,
  name,
  client,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  saveCustomCertificateText,
}

export const CustomCertificateTextContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CustomCertificateText)
