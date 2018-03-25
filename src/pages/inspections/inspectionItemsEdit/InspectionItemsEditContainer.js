import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { InspectionItemsEdit } from './InspectionItemsEdit'
import {
  toggleEditInspection,
  loadInspection,
  discardInspection,
} from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = (
  { firebase: { auth: { uid } }, firestore: { data: { users } }, inspection },
  { location: { state: { id } } },
) => ({
  userId: uid,
  inspectionId: id,
  savedInspection:
    users && users[uid].inspections && users[uid].inspections[id],
  inspection,
})

const mapDispatchToProps = {
  toggleEditInspection,
  loadInspection,
  discardInspection,
}

export const InspectionItemsEditContainer = compose(
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(InspectionItemsEdit)
