import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { InspectionList } from './InspectionList'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { toggleEditInspection } from '../../../store/actions/actionCreators/inspectionActions'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { auth: { uid } },
  searchBar: { open, query },
}) => ({
  userId: uid,
  open,
  query,
  inspections:
    users &&
    users[uid].inspections &&
    objectToArrayWithId(users[uid].inspections),
})

const mapDispatchToProps = {
  openSearchBar,
  closeSearchBar,
  toggleEditInspection,
}

export const InspectionListContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(InspectionList)
