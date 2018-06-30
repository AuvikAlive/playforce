import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateImpactSurface } from '../../../store/actions/actionCreators/inspectionActions/'
import { EditImpactSurface } from './EditImpactSurface'

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
  id: impactTestId,
  impactTest: impactTests.find(({ id }) => id === impactTestId),
})

const mapDispatchToProps = { updateImpactSurface }

export const EditImpactSurfaceContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditImpactSurface)
