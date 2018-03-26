import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Manufacturers } from './Manufacturers'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { data: { users } },
}) => ({
  userId: uid,
  manufacturers:
    users &&
    users[uid].manufacturers &&
    objectToArrayWithId(users[uid].manufacturers),
})

export const ManufacturersContainer = compose(
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps),
)(Manufacturers)
