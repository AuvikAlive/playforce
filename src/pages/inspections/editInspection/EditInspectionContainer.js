import { connect } from 'react-redux'
import { compose } from 'redux'
import { EditInspection } from './EditInspection'
import {
  deleteInspection,
  discardInspection,
  toggleInspectionCertificate,
  toggleInspectionComplete,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'

const mapStateToProps = (
  { firebase, inspection, standard, reportNote },
  { match }
) => {
  const { auth, profile } = firebase

  const {
    displayName,
    email,
    defaultCertificateText,
    signature,
    inspectionCount,
    inspectionCompleteCount,
  } = profile

  const { standards } = standard
  const { reportNotes } = reportNote

  return {
    userId: auth.uid,
    inspectionId: inspection.id,
    inspection,
    displayName,
    email,
    defaultCertificateText,
    signature,
    inspectionCount,
    inspectionCompleteCount,
    standards,
    reportNotes,
  }
}

const mapDispatchToProps = {
  deleteInspection,
  discardInspection,
  toggleInspectionCertificate,
  toggleInspectionComplete,
}

const enhance = compose(
  withDeleteDialog,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditInspectionContainer = enhance(EditInspection)
