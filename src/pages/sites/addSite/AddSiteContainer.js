import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddSite } from './AddSite'

const mapStateToProps = ({ firebase: { profile } }) => ({
  profile,
})

export const AddSiteContainer = compose(connect(mapStateToProps))(AddSite)
