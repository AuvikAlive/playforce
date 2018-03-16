import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Cover } from './Cover'
import { addInspectionCover } from '../../../store/actions/actionCreators/inspectionActions'

const mapStateToProps = ({
  firestore: { ordered: { sites = [], users = [] } },
  firebase: { profile: { displayName, email }, auth: { uid } },
  inspection: { cover },
}) => ({
  sites,
  displayName,
  email,
  cover,
  uid,
  standards: users,
})

const mapDispatchToProps = { addInspectionCover }

export const CoverContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(Cover)
