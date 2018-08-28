import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { deleteSurfaceTest } from '../../../store/actions/actionCreators/inspectionActions/'
import { ImpactTestDetailItems } from './ImpactTestDetailItems'

const mapStateToProps = ({ firebase, inspection }, { impactTestId }) => {
  const { id, impactTests } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    impactTests,
    impactTest: impactTests.find(({ id }) => id === impactTestId),
  }
}

const mapDispatchToProps = { deleteSurfaceTest }

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ImpactTestDetailItemsContainer = enhance(ImpactTestDetailItems)
