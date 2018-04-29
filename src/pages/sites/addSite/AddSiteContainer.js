import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addSite } from '../../../store/actions/actionCreators/siteActions/'
import { AddSite } from './AddSite'

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

const mapDispatchToProps = { addSite }

export const AddSiteContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddSite)
