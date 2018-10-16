import { connect } from 'react-redux'
import { compose } from 'recompose'
// import { withFirestore } from 'react-redux-firebase'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import {
  fetchInspectionsRealTime,
  fetchInspectionsById,
  fetchInspectionsByIdWithComplianceIssues,
  fetchInspectionsByIdWithMaintenanceIssues,
  archiveInspections,
  unarchiveInspections,
  searchInspections,
  deleteInspections,
  toggleView,
} from '../../../store/actions/actionCreators/inspectionListActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions'
import { InspectionList } from './InspectionList'

const mapStateToProps = ({ firebase, searchBar, inspectionList, standard }) => {
  const { open, query, results } = searchBar
  const { view, inspectionsLoaded, inspections } = inspectionList
  const { standardsLoaded, standards } = standard

  return {
    userId: firebase.auth.uid,
    open,
    searchBarOpen: open,
    searchResults: results,
    query,
    view,
    inspectionsLoaded,
    inspections,
    standardsLoaded,
    standards,
  }
}

const mapDispatchToProps = {
  openSearchBar,
  closeSearchBar,
  fetchInspectionsRealTime,
  fetchInspectionsById,
  fetchInspectionsByIdWithComplianceIssues,
  fetchInspectionsByIdWithMaintenanceIssues,
  archiveInspections,
  unarchiveInspections,
  searchInspections,
  deleteInspections,
  fetchStandards,
  toggleView,
}

const enhance = compose(
  withDialog,
  // withFirestore,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const InspectionListContainer = enhance(InspectionList)
