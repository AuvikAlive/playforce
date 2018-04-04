import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore, withFirebase } from 'react-redux-firebase'
import { InspectionItemsEdit } from './InspectionItemsEdit'
import {
  toggleEditInspection,
  fetchInspection,
  saveInspection,
  discardInspection,
} from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = (
  {
    firebase: { auth: { uid }, profile: { displayName } },
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
  displayName,
})

const mapDispatchToProps = {
  toggleEditInspection,
  fetchInspection,
  saveInspection,
  discardInspection,
}

export const InspectionItemsEditContainer = compose(
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps),
)(InspectionItemsEdit)
