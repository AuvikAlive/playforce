import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  updateStandard,
  fetchStandard,
  deleteStandard,
} from '../../../store/actions/actionCreators/standardActions/'
import { EditStandard } from './EditStandard'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
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

const mapDispatchToProps = { updateStandard, fetchStandard, deleteStandard }

export const EditStandardContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(mapStateToProps, mapDispatchToProps)
)(EditStandard)
