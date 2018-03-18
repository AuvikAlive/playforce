import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { Company } from './Company'

const mapStateToProps = ({ firebase: { profile: { company } } }) => ({
  company,
})

export const CompanyContainer = compose(withFirebase, connect(mapStateToProps))(
  Company,
)
