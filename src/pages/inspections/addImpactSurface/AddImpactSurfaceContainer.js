import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addSurfaceTest } from '../../../store/actions/actionCreators/inspectionActions/'
import { AddImpactSurface } from './AddImpactSurface'

const mapStateToProps = ({ firebase, inspection }) => ({
  userId: firebase.auth.uid,
  inspectionId: inspection.id,
})

const mapDispatchToProps = { addSurfaceTest }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AddImpactSurfaceContainer = enhance(AddImpactSurface)
