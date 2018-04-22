import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore, withFirebase } from 'react-redux-firebase'
import { InspectionItemsAdd } from './InspectionItemsAdd'
import {
  saveInspection,
  discardInspection,
  fetchInspection,
} from '../../../store/actions/actionCreators/inspectionActions//'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
    profile: { inspectionCount },
  },
  inspection,
}) => ({
  userId: uid,
  inspection,
  inspectionCount,
})

const mapDispatchToProps = {
  saveInspection,
  discardInspection,
  fetchInspection,
}

export const InspectionItemsAddContainer = compose(
  withDeleteModal,
  withFeedback,
  withFirestore,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(InspectionItemsAdd)
