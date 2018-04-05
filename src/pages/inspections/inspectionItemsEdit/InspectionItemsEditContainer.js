import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore, withFirebase } from 'react-redux-firebase'
import { InspectionItemsEdit } from './InspectionItemsEdit'
import {
  fetchInspection,
  saveInspection,
  saveInspectionDraft,
  loadInspectionDraft,
  discardInspection,
  deleteInspection,
} from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = (
  {
    firebase: { auth: { uid }, profile: { displayName, inspectionCount } },
    firestore: { data: { users } },
    inspection,
  },
  { location: { state: { id } } },
) => ({
  userId: uid,
  inspectionId: id,
  savedInspection:
    users && users[uid].inspections && users[uid].inspections[id],
  inspection,
  inspectionCount,
  displayName,
})

const mapDispatchToProps = {
  fetchInspection,
  saveInspection,
  saveInspectionDraft,
  loadInspectionDraft,
  discardInspection,
  deleteInspection,
}

export const InspectionItemsEditContainer = compose(
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps),
)(InspectionItemsEdit)
