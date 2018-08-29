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

const mapStateToProps = ({ firebase, inspectionList, project, searchBar }) => {
  const { inspectionsLoaded, inspections } = inspectionList
  const { projectMembersLoaded, projectMembers } = project
  const { open, query, results } = searchBar

  return {
    userId: firebase.auth.uid,
    inspectionsLoaded,
    inspections,
    projectMembersLoaded,
    projectMembers,
    searchBarOpen: open,
    searchResults: results,
    query,
  }
}

const mapDispatchToProps = {
  fetchInspectionsRealTime,
  searchInspections,
  fetchProjectMembersRealTime,
  deleteInspections,
  openSearchBar,
  closeSearchBar,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const DeleteInspectionsContainer = enhance(DeleteInspections)
