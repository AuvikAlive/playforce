import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { toggleEditInspection } from '../../../store/actions/actionCreators/inspectionActions/'
import { fetchInspectionsRealTime } from '../../../store/actions/actionCreators/inspectionListActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions'
import { InspectionList } from './InspectionList'

const mapStateToProps = ({
  firestore: {
    data: { users },
  },
  firebase: {
    auth: { uid },
  },
  searchBar: { open, query },
  inspectionList: { inspectionsLoaded, inspections },
  standard: { standardsLoaded, standards },
}) => ({
  userId: uid,
  open,
  query,
  inspectionsLoaded,
  inspections,
  standardsLoaded,
  standards,
})

const mapDispatchToProps = {
  openSearchBar,
  closeSearchBar,
  toggleEditInspection,
  fetchInspectionsRealTime,
  fetchStandards,
}

export const InspectionListContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(InspectionList)
