import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { Company } from './Company'

const mapStateToProps = ({ firebase: { profile: { companyInfo } } }) => ({
  companyInfo,
})

export const CompanyContainer = compose(
  withErrorLoadingSubmit,
  withFirebase,
  connect(mapStateToProps),
)(Company)
