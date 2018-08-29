import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { fetchOperatorsRealTime } from '../../store/actions/actionCreators/operatorActions/'
import { addSite } from '../../store/actions/actionCreators/siteActions/'
import { AddSiteDialog } from './AddSiteDialog'

const mapStateToProps = ({ firebase, operator }) => {
  const { operatorsLoaded, operators } = operator

  return {
    userId: firebase.auth.uid,
    operatorsLoaded,
    operators,
  }
}

const mapDispatchToProps = { fetchOperatorsRealTime, addSite }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const AddSiteDialogContainer = enhance(AddSiteDialog)
