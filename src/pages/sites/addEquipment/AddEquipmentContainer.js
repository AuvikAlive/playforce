import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addEquipment } from '../../../store/actions/actionCreators/equipmentActions/'
import { AddEquipment } from './AddEquipment'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { addEquipment }

export const AddEquipmentContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddEquipment)
