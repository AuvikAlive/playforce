import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { deleteImpactSurface } from '../../../store/actions/actionCreators/inspectionActions/'
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

const mapDispatchToProps = { deleteImpactSurface }

export const ImpactTestDetailItemsContainer = compose(
  withFeedback,
  withDeleteModal,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ImpactTestDetailItems)
