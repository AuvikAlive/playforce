import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { saveOperator } from '../../../store/actions/actionCreators/operatorActions/'
import { Form } from './Form'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { saveOperator }

export const FormContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(Form)
