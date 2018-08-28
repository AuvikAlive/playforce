import { connect } from 'react-redux'
import { compose } from 'redux'
import { Manufacturers } from './Manufacturers'
import {
  deleteManufacturer,
  fetchManufacturersRealTime,
} from '../../../store/actions/actionCreators/manufacturerActions/'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'

const mapStateToProps = ({ firebase, manufacturer }) => {
  const { manufacturersLoaded, manufacturers } = manufacturer

  return {
    userId: firebase.auth.uid,
    manufacturersLoaded,
    manufacturers,
  }
}

const mapDispatchToProps = {
  deleteManufacturer,
  fetchManufacturersRealTime,
}

const enhance = compose(
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ManufacturersContainer = enhance(Manufacturers)
