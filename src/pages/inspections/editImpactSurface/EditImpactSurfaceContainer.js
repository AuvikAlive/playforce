import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateImpactSurface } from '../../../store/actions/actionCreators/inspectionActions/'
import { EditImpactSurface } from './EditImpactSurface'

const mapStateToProps = ({ firebase, inspection }, { impactTestId }) => {
  const { id, impactTests } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    id: impactTestId,
    impactTest: impactTests.find(({ id }) => id === impactTestId),
  }
}

const mapDispatchToProps = { updateImpactSurface }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditImpactSurfaceContainer = enhance(EditImpactSurface)
