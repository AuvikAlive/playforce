import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addEquipment } from '../../../store/actions/actionCreators/equipmentActions/'
import { AddEquipment } from './AddEquipment'

const mapStateToProps = ({ firebase }) => ({
  userId: firebase.auth.uid,
})

const mapDispatchToProps = { addEquipment }

const enhance = compose(
  withFeedback,
  withDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AddEquipmentContainer = enhance(AddEquipment)
