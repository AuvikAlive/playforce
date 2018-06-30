import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchInspectionsRealTime } from '../../../store/actions/actionCreators/inspectionListActions/'
import {
  fetchProjectMembersRealTime,
  addInspections,
} from '../../../store/actions/actionCreators/projectActions/'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { AddInspections } from './AddInspections'

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
  addInspections,
  openSearchBar,
  closeSearchBar,
}

export const AddInspectionsContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddInspections)
