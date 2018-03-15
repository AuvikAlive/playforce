import { connect } from 'react-redux'
import { compose } from 'redux'
import { Manufacturers } from './Manufacturers'

const mapStateToProps = ({ firebase: { profile } }) => ({
  profile,
})

export const ManufacturersContainer = compose(connect(mapStateToProps))(
  Manufacturers,
)
