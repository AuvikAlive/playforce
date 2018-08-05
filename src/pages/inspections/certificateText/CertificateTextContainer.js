import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  saveCustomCertificateText,
} from '../../../store/actions/actionCreators/inspectionActions'
import { CertificateText } from './CertificateText'

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

export const CertificateTextContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CertificateText)
