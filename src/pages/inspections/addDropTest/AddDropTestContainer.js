import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addDropTest } from '../../../store/actions/actionCreators/inspectionActions/'
import { AddDropTest } from './AddDropTest'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id },
}) => ({
  userId: uid,
  inspectionId: id,
})

const mapDispatchToProps = { addDropTest }

export const AddDropTestContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddDropTest)
