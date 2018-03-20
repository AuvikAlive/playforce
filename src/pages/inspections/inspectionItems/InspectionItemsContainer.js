import { connect } from 'react-redux'
import { compose } from 'redux'
import { InspectionItems } from './InspectionItems'
import { discardInspection } from '../../../store/actions/actionCreators/inspectionActions'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapDispatchToProps = { discardInspection }

export const InspectionItemsContainer = compose(
  withDeleteModal,
  connect(null, mapDispatchToProps),
)(InspectionItems)
