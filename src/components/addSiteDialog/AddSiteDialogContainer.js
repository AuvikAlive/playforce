import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { fetchOperatorsRealTime } from '../../store/actions/actionCreators/operatorActions/'
import { addSite } from '../../store/actions/actionCreators/siteActions/'
import { AddSiteDialog } from './AddSiteDialog'

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

const mapDispatchToProps = { fetchOperatorsRealTime, addSite }

export const AddSiteDialogContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddSiteDialog)
