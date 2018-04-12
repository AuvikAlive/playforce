import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { InspectionList } from './InspectionList'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
import { fetchInspectionsBySiteRealTime } from '../../../store/actions/actionCreators/inspectionListActions'
import { deleteInspection } from '../../../store/actions/actionCreators/inspectionActions'

const mapStateToProps = (
  {
    firestore: { ordered },
    firebase: { auth: { uid } },
    inspectionList: { inspectionsLoaded, inspections },
  },
  { match: { params: { id } } }
) => ({
  userId: uid,
  siteId: id,
  inspectionsLoaded,
  inspections,
})

const mapDispatchToProps = { fetchInspectionsBySiteRealTime, deleteInspection }

export const InspectionListContainer = compose(
  withDeleteModal,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(InspectionList)
