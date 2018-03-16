import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Manufacturers } from './Manufacturers'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { ordered: { users = [] } },
}) => ({
  userId: uid,
  manufacturers: users,
})

export const ManufacturersContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(Manufacturers)
