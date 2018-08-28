import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addDropTest } from '../../../store/actions/actionCreators/inspectionActions/'
import { AddDropTest } from './AddDropTest'

const mapStateToProps = ({ firebase, inspection }) => ({
  userId: firebase.auth.uid,
  inspectionId: inspection.id,
})

const mapDispatchToProps = { addDropTest }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AddDropTestContainer = enhance(AddDropTest)
