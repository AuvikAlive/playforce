import { connect } from 'react-redux'
import { compose } from 'redux'
import { InspectionList } from './InspectionList'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchInspectionsBySiteRealTime } from '../../../store/actions/actionCreators/inspectionListActions/'
import { deleteInspection } from '../../../store/actions/actionCreators/inspectionActions/deleteInspection'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspectionList: { inspectionsBySiteLoaded, inspectionsBySite },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  siteId: id,
  inspectionsBySiteLoaded,
  inspectionsBySite,
})

const mapDispatchToProps = { fetchInspectionsBySiteRealTime, deleteInspection }

export const InspectionListContainer = compose(
  withFeedback,
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(InspectionList)
