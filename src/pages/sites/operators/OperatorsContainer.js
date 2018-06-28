import { connect } from 'react-redux'
import { compose } from 'redux'
import { Operators } from './Operators'
import {
  deleteOperator,
  fetchOperatorsRealTime,
} from '../../../store/actions/actionCreators/operatorActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'

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
  deleteOperator,
  fetchOperatorsRealTime,
}

export const OperatorsContainer = compose(
  withDeleteDialog,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(Operators)
