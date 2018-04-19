import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Cover } from './Cover'
import { addInspectionCover } from '../../../store/actions/actionCreators/inspectionActions/'
import { fetchSites } from '../../../store/actions/actionCreators/siteActions/'
import { fetchEquipments } from '../../../store/actions/actionCreators/equipmentActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions'
import { fetchClients } from '../../../store/actions/actionCreators/clientActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'

const mapStateToProps = ({
  firebase: {
    profile: { displayName, email },
    auth: { uid },
  },
  inspection: { cover },
  site: { sitesLoaded, sites },
  standard: { standardsLoaded, standards },
  client: { clientsLoaded, clients },
}) => ({
  displayName,
  email,
  cover,
  userId: uid,
  sitesLoaded,
  sites,
  standardsLoaded,
  standards,
  clientsLoaded,
  clients,
})

const mapDispatchToProps = {
  addInspectionCover,
  fetchSites,
  fetchStandards,
  fetchClients,
  fetchEquipments,
}

export const CoverContainer = compose(
  withImageCapture,
  withFeedback,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(Cover)
