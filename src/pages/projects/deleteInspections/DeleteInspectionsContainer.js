import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchInspectionsRealTime } from '../../../store/actions/actionCreators/inspectionListActions/'
import {
  fetchProjectMembersRealTime,
  deleteInspections,
} from '../../../store/actions/actionCreators/projectActions/'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { DeleteInspections } from './DeleteInspections'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspectionList: { inspectionsLoaded, inspections },
  project: { projectMembersLoaded, projectMembers },
}) => ({
  userId: uid,
  inspectionsLoaded,
  inspections,
  projectMembersLoaded,
  projectMembers,
})

const mapDispatchToProps = {
  fetchInspectionsRealTime,
  fetchProjectMembersRealTime,
  deleteInspections,
  openSearchBar,
  closeSearchBar,
}

export const DeleteInspectionsContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DeleteInspections)
