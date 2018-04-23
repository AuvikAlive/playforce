import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { saveEquipment } from '../../../store/actions/actionCreators/equipmentActions/'
import { AddEquipment } from './AddEquipment'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { saveEquipment }

export const AddEquipmentContainer = compose(
  withFeedback,
  withDeleteModal,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AddEquipment)
