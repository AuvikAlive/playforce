import { connect } from 'react-redux'
import { compose } from 'redux'
import { InspectionList } from './InspectionList'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchInspectionsBySiteRealTime } from '../../../store/actions/actionCreators/inspectionListActions/'
import { deleteInspection } from '../../../store/actions/actionCreators/inspectionActions/deleteInspection'

const mapStateToProps = ({ firebase, inspectionList }, { match }) => {
  const { inspectionsBySiteLoaded, inspectionsBySite, site } = inspectionList

  return {
    userId: firebase.auth.uid,
    siteId: match.params.id,
    inspectionsBySiteLoaded,
    inspectionsBySite,
    site,
  }
}

const mapDispatchToProps = { fetchInspectionsBySiteRealTime, deleteInspection }

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const InspectionListContainer = enhance(InspectionList)
