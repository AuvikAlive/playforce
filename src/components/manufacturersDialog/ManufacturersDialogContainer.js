import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDialog } from '../../hocs/withDialog/withDialog'
import {
  deleteManufacturer,
  fetchManufacturersRealTime,
} from '../../store/actions/actionCreators/manufacturerActions/'
import { ManufacturersDialog } from './ManufacturersDialog'

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
  withDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ManufacturersDialogContainer = enhance(ManufacturersDialog)
