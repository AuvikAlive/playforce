import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  deleteOperator,
  fetchOperatorsRealTime,
} from '../../store/actions/actionCreators/operatorActions/'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { withDeleteModal } from '../../hocs/withDeleteDialog/withDeleteDialog'
import { OperatorsDialog } from './OperatorsDialog'

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

export const OperatorsDialogContainer = compose(
  withDeleteModal,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(OperatorsDialog)
