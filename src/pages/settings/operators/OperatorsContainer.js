import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Operators } from './Operators'
import {
  saveOperator,
  deleteOperator,
  fetchOperatorsRealTime,
} from '../../../store/actions/actionCreators/operatorActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  firestore: {
    data: { users },
  },
  operator: { operatorsLoaded, operators },
}) => ({
  userId: uid,
  operatorsLoaded,
  operators,
})

const mapDispatchToProps = {
  saveOperator,
  deleteOperator,
  fetchOperatorsRealTime,
}

export const OperatorsContainer = compose(
  withDeleteModal,
  withFeedback,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(Operators)
