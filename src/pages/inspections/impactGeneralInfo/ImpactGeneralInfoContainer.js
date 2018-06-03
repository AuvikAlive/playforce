import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { ImpactGeneralInfo } from './ImpactGeneralInfo'
import { saveImpactGeneralInfo } from '../../../store/actions/actionCreators/inspectionActions/'

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

export const ImpactGeneralInfoContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(ImpactGeneralInfo)
