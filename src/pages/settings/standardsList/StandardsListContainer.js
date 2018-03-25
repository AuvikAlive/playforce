import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { StandardsList } from './StandardsList'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { data: { users } },
}) => ({
  userId: uid,
  standards:
    users && users[uid].standards && objectToArrayWithId(users[uid].standards),
})

export const StandardsListContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(StandardsList)
