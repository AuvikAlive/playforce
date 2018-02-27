import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { SiteList } from './SiteList'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'

const mapDispatchToProps = { openSearchBar, closeSearchBar }

export const SiteListContainer = compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(SiteList)
