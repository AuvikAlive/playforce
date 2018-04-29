import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { withFullscreenDialog } from '../../hocs/withFullscreenDialog/withFullscreenDialog'
import { fetchOperatorsRealTime } from '../../store/actions/actionCreators/operatorActions/'
import { SiteForm } from './SiteForm'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  operator: { operatorsLoaded, operators },
}) => ({
  userId: uid,
  operatorsLoaded,
  operators,
})

const mapDispatchToProps = { fetchOperatorsRealTime }

export const SiteFormContainer = compose(
  withFullscreenDialog,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(SiteForm)
