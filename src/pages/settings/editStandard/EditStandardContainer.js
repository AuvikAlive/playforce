import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
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
  withDeleteModal,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(EditStandard)
