import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { InspectionItemsAdd } from './InspectionItemsAdd'
import { discardInspection } from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = ({ firebase: { auth: { uid } }, inspection }) => ({
  userId: uid,
  inspection,
})

const mapDispatchToProps = { discardInspection }

export const InspectionItemsAddContainer = compose(
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(InspectionItemsAdd)
