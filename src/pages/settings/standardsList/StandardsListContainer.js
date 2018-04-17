import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { StandardsList } from './StandardsList'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions/'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  firestore: {
    data: { users },
  },
  standard: { standardsLoaded, standards },
}) => ({
  userId: uid,
  standardsLoaded,
  standards,
})

const mapDispatchToProps = { fetchStandards }

export const StandardsListContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(StandardsList)
