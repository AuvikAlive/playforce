import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { Company } from './Company'

const mapStateToProps = ({
  firebase: {
    profile: { companyInfo },
  },
}) => ({
  companyInfo,
})

export const CompanyContainer = compose(
  withFeedback,
  withFirebase,
  connect(mapStateToProps)
)(Company)
