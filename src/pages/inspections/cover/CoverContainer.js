import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Cover } from './Cover'
import { addInspectionCover } from '../../../store/actions/actionCreators/inspectionActions'

const mapStateToProps = ({
  firestore: { data: { users }, ordered: { sites = [] } },
  firebase: { profile: { displayName, email }, auth: { uid } },
  inspection: { cover },
}) => ({
  sites,
  displayName,
  email,
  cover,
  uid,
  data: users && users[uid],
})

const mapDispatchToProps = { addInspectionCover }

export const CoverContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(Cover)
