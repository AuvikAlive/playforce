import { connect } from 'react-redux'
import { compose } from 'redux'
import { Company } from './Company'

const mapStateToProps = ({ firebase: { profile } }) => ({
  profile,
})

export const CompanyContainer = compose(connect(mapStateToProps))(Company)
