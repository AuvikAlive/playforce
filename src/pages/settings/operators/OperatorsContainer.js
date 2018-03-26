import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Operators } from './Operators'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { data: { users } },
}) => ({
  userId: uid,
  operators:
    users && users[uid].operators && objectToArrayWithId(users[uid].operators),
})

export const OperatorsContainer = compose(
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps),
)(Operators)
