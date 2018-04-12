import { connect } from 'react-redux'
import { compose } from 'redux'
import { InspectionList } from './InspectionList'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
import { fetchInspectionsBySiteRealTime } from '../../../store/actions/actionCreators/inspectionListActions'
import { deleteInspection } from '../../../store/actions/actionCreators/inspectionActions'

const mapStateToProps = (
  {
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
  connect(mapStateToProps, mapDispatchToProps)
)(InspectionList)
