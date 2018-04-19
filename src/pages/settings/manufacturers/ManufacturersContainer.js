import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Manufacturers } from './Manufacturers'
import {
  saveManufacturer,
  deleteManufacturer,
  fetchManufacturersRealTime,
} from '../../../store/actions/actionCreators/manufacturerActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  firestore: {
    data: { users },
  },
  manufacturer: { manufacturersLoaded, manufacturers },
}) => ({
  userId: uid,
  manufacturersLoaded,
  manufacturers,
})

const mapDispatchToProps = {
  saveManufacturer,
  deleteManufacturer,
  fetchManufacturersRealTime,
}

export const ManufacturersContainer = compose(
  withDeleteModal,
  withFeedback,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(Manufacturers)
