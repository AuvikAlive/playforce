import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteModal } from '../../hocs/withDeleteDialog/withDeleteDialog'
import {
  deleteManufacturer,
  fetchManufacturersRealTime,
} from '../../store/actions/actionCreators/manufacturerActions/'
import { ManufacturersDialog } from './ManufacturersDialog'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  manufacturer: { manufacturersLoaded, manufacturers },
}) => ({
  userId: uid,
  manufacturersLoaded,
  manufacturers,
})

const mapDispatchToProps = {
  deleteManufacturer,
  fetchManufacturersRealTime,
}

export const ManufacturersDialogContainer = compose(
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(ManufacturersDialog)
