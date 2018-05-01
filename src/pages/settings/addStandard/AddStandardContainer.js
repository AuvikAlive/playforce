import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addStandard } from '../../../store/actions/actionCreators/standardActions/'
import { AddStandard } from './AddStandard'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { addStandard }

export const AddStandardContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddStandard)
