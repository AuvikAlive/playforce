import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { saveImpactGeneralInfo } from '../../../store/actions/actionCreators/inspectionActions/'
import { EditImpactGeneralInfo } from './EditImpactGeneralInfo'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id, impactGeneralInfo },
}) => ({
  userId: uid,
  inspectionId: id,
  impactGeneralInfo,
})

const mapDispatchToProps = { saveImpactGeneralInfo }

export const EditImpactGeneralInfoContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(EditImpactGeneralInfo)
