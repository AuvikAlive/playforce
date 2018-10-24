import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchSitesRealTime } from '../../../store/actions/actionCreators/siteActions/'
import { fetchStandardsRealTime } from '../../../store/actions/actionCreators/standardActions'
import { fetchClientsRealTime } from '../../../store/actions/actionCreators/clientActions/'
import { StandaloneImpactGeneralInfoForm } from './StandaloneImpactGeneralInfoForm'

const mapStateToProps = ({
  firebase,
  site,
  standard,
  client,
  inspectionType,
}) => {
  const { auth, profile } = firebase
  const { displayName, title, company, signature } = profile
  const { sitesLoaded, sites } = site
  const { standardsLoaded, standards } = standard
  const { clientsLoaded, clients } = client
  const { inspectionTypesLoaded, inspectionTypes } = inspectionType

  return {
    userId: auth.uid,
    displayName,
    title,
    company,
    signature,
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
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const StandaloneImpactGeneralInfoFormContainer = enhance(
  StandaloneImpactGeneralInfoForm
)
