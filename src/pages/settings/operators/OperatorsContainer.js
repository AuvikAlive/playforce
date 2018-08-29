import { connect } from 'react-redux'
import { compose } from 'redux'
import { Operators } from './Operators'
import {
  deleteOperator,
  fetchOperatorsRealTime,
} from '../../../store/actions/actionCreators/operatorActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'

const mapStateToProps = ({ firebase, operator }) => {
  const { operatorsLoaded, operators } = operator

  return {
    userId: firebase.auth.uid,
    operatorsLoaded,
    operators,
  }
}

const mapDispatchToProps = {
  deleteOperator,
  fetchOperatorsRealTime,
}

const enhance = compose(
  withDeleteDialog,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const OperatorsContainer = enhance(Operators)
