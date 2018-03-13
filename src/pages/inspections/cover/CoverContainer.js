import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Cover } from './Cover'

const mapStateToProps = ({
  firestore: { ordered: { sites = [] } },
  firebase: { profile: { displayName, email } },
}) => ({
  sites,
  displayName,
  email,
})

export const CoverContainer = compose(
  firestoreConnect(({ email }) => {
    return [
      {
        collection: 'sites',
        orderBy: 'name',
        // where: ['addedUser', '==', email],
      },
    ]
  }),
  connect(mapStateToProps),
)(Cover)
