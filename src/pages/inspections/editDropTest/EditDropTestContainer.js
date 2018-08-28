import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import {
  updateDropTest,
  deleteDropTest,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { EditDropTest } from './EditDropTest'

const mapStateToProps = ({ firebase, inspection }, { match, impactTestId }) => {
  const { id, impactTests } = inspection
  const dropTestId = match.params.id

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    id: dropTestId,
    dropTest:
      impactTests.find(item => item.id === impactTestId) &&
      impactTests
        .find(item => item.id === impactTestId)
        .dropTests.find(item => item.id === dropTestId),
  }
}

const mapDispatchToProps = { updateDropTest, deleteDropTest }

const enhance = compose(
  withDeleteDialog,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditDropTestContainer = enhance(EditDropTest)
