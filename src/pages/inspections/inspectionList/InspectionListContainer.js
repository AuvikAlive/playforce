import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import {
  fetchInspectionsRealTime,
  fetchInspectionsById,
  fetchInspectionsByIdWithComplianceIssues,
  archiveInspections,
  unarchiveInspections,
  searchInspections,
  deleteInspections,
  toggleView,
} from '../../../store/actions/actionCreators/inspectionListActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions'
import { InspectionList } from './InspectionList'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  searchBar: { open, query, results },
  inspectionList: { view, inspectionsLoaded, inspections },
  standard: { standardsLoaded, standards },
}) => ({
  userId: uid,
  open,
  searchBarOpen: open,
  searchResults: results,
  query,
  view,
  inspectionsLoaded,
  inspections,
  standardsLoaded,
  standards,
})

const mapDispatchToProps = {
  openSearchBar,
  closeSearchBar,
  fetchInspectionsRealTime,
  fetchInspectionsById,
  fetchInspectionsByIdWithComplianceIssues,
  archiveInspections,
  unarchiveInspections,
  searchInspections,
  deleteInspections,
  fetchStandards,
  toggleView,
}

export const InspectionListContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(InspectionList)
