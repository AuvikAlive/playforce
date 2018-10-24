import { connect } from 'react-redux'
import { compose } from 'redux'
import { addStandaloneImpactTest } from '../../../store/actions/actionCreators/inspectionActions/'
import { StandaloneImpactTestRoutes } from './StandaloneImpactTestRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, impactTests, impactGeneralInfo } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    impactTests,
    impactGeneralInfo,
  }
}

const mapDispatchToProps = {
  addStandaloneImpactTest,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const StandaloneImpactTestRoutesContainer = enhance(
  StandaloneImpactTestRoutes
)
