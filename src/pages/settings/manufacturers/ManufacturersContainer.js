import { connect } from 'react-redux'
import { compose } from 'redux'
import { Manufacturers } from './Manufacturers'
import {
  deleteManufacturer,
  fetchManufacturersRealTime,
} from '../../../store/actions/actionCreators/manufacturerActions/'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'

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

export const ManufacturersContainer = compose(
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(Manufacturers)
