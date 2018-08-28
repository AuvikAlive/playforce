import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { saveImpactGeneralInfo } from '../../../store/actions/actionCreators/inspectionActions/'
import { EditImpactGeneralInfo } from './EditImpactGeneralInfo'

const mapStateToProps = ({ firebase, inspection }) => {
  const { id, impactGeneralInfo } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    impactGeneralInfo,
  }
}

const mapDispatchToProps = { saveImpactGeneralInfo }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditImpactGeneralInfoContainer = enhance(EditImpactGeneralInfo)
