import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { InspectionList } from './InspectionList'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { toggleEditInspection } from '../../../store/actions/actionCreators/inspectionActions'
import { fetchInspections } from '../../../store/actions/actionCreators/inspectionListActions'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { auth: { uid } },
  searchBar: { open, query },
  inspectionList: { inspectionsLoaded, inspections },
}) => ({
  userId: uid,
  open,
  query,
  inspectionsLoaded,
  inspections,
})

const mapDispatchToProps = {
  openSearchBar,
  closeSearchBar,
  toggleEditInspection,
  fetchInspections,
}

export const InspectionListContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(InspectionList)
