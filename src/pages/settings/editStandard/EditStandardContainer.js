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

const mapStateToProps = ({ firebase, standard }, { match }) => {
  const { standardsLoaded, standards } = standard
  const standardId = match.params.id

  return {
    userId: firebase.auth.uid,
    standardId,
    standard:
      (standardsLoaded && standards.find(item => item.id === standardId)) ||
      standard.standard,
  }
}

const mapDispatchToProps = { updateStandard, fetchStandard, deleteStandard }

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditStandardContainer = enhance(EditStandard)
