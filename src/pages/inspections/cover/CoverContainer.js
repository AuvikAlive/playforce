import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Cover } from './Cover'
import { addInspectionCover } from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { profile: { displayName, email }, auth: { uid } },
  inspection: { cover },
}) => ({
  displayName,
  email,
  cover,
  userId: uid,
  data: users && users[uid],
})

const mapDispatchToProps = { addInspectionCover }

export const CoverContainer = compose(
  withImageCapture,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(Cover)
