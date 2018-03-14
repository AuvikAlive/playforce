import { connect } from 'react-redux'
import { compose } from 'redux'
import { InspectionItems } from './InspectionItems'
import { discardInspection } from '../../../store/actions/actionCreators/inspectionActions'

const mapDispatchToProps = { discardInspection }

export const InspectionItemsContainer = compose(
  connect(null, mapDispatchToProps),
)(InspectionItems)
