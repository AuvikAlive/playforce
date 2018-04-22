import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { StandardsList } from './StandardsList'
import { fetchStandardsRealTime } from '../../../store/actions/actionCreators/standardActions/'

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

const mapDispatchToProps = { fetchStandardsRealTime }

export const StandardsListContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(StandardsList)
