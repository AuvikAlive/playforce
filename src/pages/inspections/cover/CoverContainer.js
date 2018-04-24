import { connect } from 'react-redux'
import { compose } from 'redux'
import { Cover } from './Cover'
import {
  fetchInspection,
  addInspectionCover,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { fetchSitesRealTime } from '../../../store/actions/actionCreators/siteActions/'
import { fetchEquipmentsRealTime } from '../../../store/actions/actionCreators/equipmentActions/'
import { fetchStandardsRealTime } from '../../../store/actions/actionCreators/standardActions'
import { fetchClientsRealTime } from '../../../store/actions/actionCreators/clientActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'

const mapStateToProps = (
  {
    firebase: {
      profile: { displayName, email },
      auth: { uid },
    },
    inspection: { inspectionLoaded, cover },
    site: { sitesLoaded, sites },
    standard: { standardsLoaded, standards },
    client: { clientsLoaded, clients },
    equipments: { equipmentsSite },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  displayName,
  email,
  userId: uid,
  inspectionId: id,
  inspectionLoaded,
  cover,
  sitesLoaded,
  sites,
  standardsLoaded,
  standards,
  clientsLoaded,
  clients,
  equipmentsSite,
})

const mapDispatchToProps = {
  addInspectionCover,
  fetchInspection,
  fetchSitesRealTime,
  fetchStandardsRealTime,
  fetchClientsRealTime,
  fetchEquipmentsRealTime,
}

export const CoverContainer = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(Cover)
