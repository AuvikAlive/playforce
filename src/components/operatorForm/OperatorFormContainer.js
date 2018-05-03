import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveOperator } from '../../store/actions/actionCreators/operatorActions/'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { OperatorForm } from './OperatorForm'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  operator: { operatorsLoaded, operators },
}) => ({
  userId: uid,
  operatorsLoaded,
  operators,
})

const mapDispatchToProps = {
  saveOperator,
}

export const OperatorFormContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(OperatorForm)
