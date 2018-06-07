import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { deleteImpactTest } from '../../../store/actions/actionCreators/inspectionActions/'
import { ImpactTestItems } from './ImpactTestItems'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id, impactTests },
}) => ({
  userId: uid,
  inspectionId: id,
  impactTests,
})

const mapDispatchToProps = { deleteImpactTest }

export const ImpactTestItemsContainer = compose(
  withFeedback,
  withDeleteModal,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ImpactTestItems)
