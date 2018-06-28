import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../hocs/withDeleteDialog/withDeleteDialog'
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
  withDeleteDialog,
  connect(mapStateToProps, mapDispatchToProps)
)(ManufacturersDialog)
