import { connect } from 'react-redux'
import { compose } from 'redux'
import { Sites } from './Sites'
import {
  openSearchBar,
  closeSearchBar,
} from '../../store/actions/actionCreators/searchBarActions'

const mapDispatchToProps = { openSearchBar, closeSearchBar }

export const SitesContainer = compose(connect(null, mapDispatchToProps))(Sites)
