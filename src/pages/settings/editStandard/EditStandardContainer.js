import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  saveStandard,
  fetchStandard,
  deleteStandard,
} from '../../../store/actions/actionCreators/standardActions/'
import { EditStandard } from './EditStandard'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    firestore: {
      ordered: { users },
    },
    standard: { standardsLoaded, standards, standard },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  standardId: id,
  standard:
    (standardsLoaded && standards.find(item => item.id === id)) || standard,
})

const mapDispatchToProps = { saveStandard, fetchStandard, deleteStandard }

export const EditStandardContainer = compose(
  withFeedback,
  withDeleteModal,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(EditStandard)
