import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchImpactTestsRealTime,
  fetchImpactTests,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { ImpactTestRoutes } from './ImpactTestRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { inspectionLoaded, impactTestsLoaded, impactTests } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    impactTestsLoaded,
    impactTests,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchImpactTestsRealTime,
  fetchImpactTests,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ImpactTestRoutesContainer = enhance(ImpactTestRoutes)
