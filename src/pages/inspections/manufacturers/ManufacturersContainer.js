import { connect } from 'react-redux'
import { compose } from 'redux'
import { Manufacturers } from './Manufacturers'
import {
  deleteManufacturer,
  fetchManufacturersRealTime,
} from '../../../store/actions/actionCreators/manufacturerActions/'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'

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
  withDeleteDialog,
  connect(mapStateToProps, mapDispatchToProps)
)(Manufacturers)
