import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchSite,
  deleteSite,
} from '../../../store/actions/actionCreators/siteActions/'
import { SiteDetail } from './SiteDetail'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    site: { sitesLoaded, sites, site },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  siteId: id,
  site: (sitesLoaded && sites.find(item => item.id === id)) || site,
})

const mapDispatchToProps = { fetchSite, deleteSite }

export const SiteDetailContainer = compose(
  withFeedback,
  withDeleteModal,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SiteDetail)
