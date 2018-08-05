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
    inspection: { inspectionLoaded, customCertificateText },
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
