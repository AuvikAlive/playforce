import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchSitesRealTime } from '../../../store/actions/actionCreators/siteActions/'
import { fetchStandardsRealTime } from '../../../store/actions/actionCreators/standardActions'
import { fetchClientsRealTime } from '../../../store/actions/actionCreators/clientActions/'
import {
  fetchInspectionTypesRealTime,
} from '../../../store/actions/actionCreators/inspectionTypeActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { CoverForm } from './CoverForm'

const mapStateToProps = ({
  firebase: {
    profile: { displayName, email },
    auth: { uid },
  },
  site: { sitesLoaded, sites },
  standard: { standardsLoaded, standards },
  client: { clientsLoaded, clients },
  inspectionType: { inspectionTypesLoaded, inspectionTypes },
}) => ({
  displayName,
  email,
  userId: uid,
  sitesLoaded,
  sites,
  standardsLoaded,
  standards,
  clientsLoaded,
  clients,
  inspectionTypesLoaded,
  inspectionTypes,
})

const mapDispatchToProps = {
  fetchSitesRealTime,
  fetchStandardsRealTime,
  fetchClientsRealTime,
  fetchInspectionTypesRealTime
}

export const CoverFormContainer = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CoverForm)
