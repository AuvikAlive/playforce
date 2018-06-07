import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import {
  updateDropTest,
  deleteDropTest,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { EditDropTest } from './EditDropTest'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, impactTests },
  },
  { match: { params }, impactTestId }
) => ({
  userId: uid,
  inspectionId: id,
  id: params.id,
  dropTest:
    impactTests.find(({ id }) => id === impactTestId) &&
    impactTests
      .find(({ id }) => id === impactTestId)
      .dropTests.find(({ id }) => id === params.id),
})

const mapDispatchToProps = { updateDropTest, deleteDropTest }

export const EditDropTestContainer = compose(
  withDeleteModal,
  withFeedback,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditDropTest)
