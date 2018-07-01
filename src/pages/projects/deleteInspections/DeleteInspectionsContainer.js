import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchInspectionsRealTime,
  searchInspections,
} from '../../../store/actions/actionCreators/inspectionListActions/'
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
  searchBar: { open, query, results },
}) => ({
  userId: uid,
  inspectionsLoaded,
  inspections,
  projectMembersLoaded,
  projectMembers,
  searchBarOpen: open,
  searchResults: results,
  query,
})

const mapDispatchToProps = {
  fetchInspectionsRealTime,
  searchInspections,
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
