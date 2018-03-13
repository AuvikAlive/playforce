import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Cover } from './Cover'
import { addInspectionCover } from '../../../store/actions/actionCreators/inspectionActions'

const mapStateToProps = ({
  firestore: { ordered: { sites = [] } },
  firebase: { profile: { displayName, email } },
  inspection: { cover },
}) => ({
  sites,
  displayName,
  email,
  cover,
})

const mapDispatchToProps = { addInspectionCover }

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
  connect(mapStateToProps, mapDispatchToProps),
)(Cover)
