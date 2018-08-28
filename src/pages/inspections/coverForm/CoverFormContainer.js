import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchSitesRealTime } from '../../../store/actions/actionCreators/siteActions/'
import { fetchStandardsRealTime } from '../../../store/actions/actionCreators/standardActions'
import { fetchClientsRealTime } from '../../../store/actions/actionCreators/clientActions/'
import { fetchInspectionTypesRealTime } from '../../../store/actions/actionCreators/inspectionTypeActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { CoverForm } from './CoverForm'

const mapStateToProps = ({
  firebase,
  site,
  standard,
  client,
  inspectionType,
}) => {
  const { auth, profile } = firebase
  const { displayName, email } = profile
  const { sitesLoaded, sites } = site
  const { standardsLoaded, standards } = standard
  const { clientsLoaded, clients } = client
  const { inspectionTypesLoaded, inspectionTypes } = inspectionType

  return {
    userId: auth.uid,
    displayName,
    email,
    sitesLoaded,
    sites,
    standardsLoaded,
    standards,
    clientsLoaded,
    clients,
    inspectionTypesLoaded,
    inspectionTypes,
  }
}

const mapDispatchToProps = {
  fetchSitesRealTime,
  fetchStandardsRealTime,
  fetchClientsRealTime,
  fetchInspectionTypesRealTime,
}

const enhance = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const CoverFormContainer = enhance(CoverForm)
