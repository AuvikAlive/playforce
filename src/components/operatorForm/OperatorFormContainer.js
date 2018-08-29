import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveOperator } from '../../store/actions/actionCreators/operatorActions/'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { OperatorForm } from './OperatorForm'

const mapStateToProps = ({ firebase, operator }) => {
  const { operatorsLoaded, operators } = operator

  return {
    userId: firebase.auth.uid,
    operatorsLoaded,
    operators,
  }
}

const mapDispatchToProps = {
  saveOperator,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const OperatorFormContainer = enhance(OperatorForm)
