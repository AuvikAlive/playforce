import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { deleteSurfaceTest } from '../../../store/actions/actionCreators/inspectionActions/'
import { ImpactTestDetailItems } from './ImpactTestDetailItems'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, impactTests },
  },
  { impactTestId }
) => ({
  userId: uid,
  inspectionId: id,
  impactTests,
  impactTest: impactTests.find(({ id }) => id === impactTestId),
})

const mapDispatchToProps = { deleteSurfaceTest }

export const ImpactTestDetailItemsContainer = compose(
  withFeedback,
  withDeleteDialog,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ImpactTestDetailItems)
