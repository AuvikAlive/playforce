import { connect } from 'react-redux'
import { compose } from 'redux'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { MaintenanceIssueForm } from './MaintenanceIssueForm'

const mapStateToProps = ({ inspection: { equipments } }) => ({
  equipments,
})

export const MaintenanceIssueFormContainer = compose(
  withImageCapture,
  withErrorLoadingSubmit,
  connect(mapStateToProps),
)(MaintenanceIssueForm)
