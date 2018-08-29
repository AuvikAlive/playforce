import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchSite,
  deleteSite,
} from '../../../store/actions/actionCreators/siteActions/'
import { SiteDetail } from './SiteDetail'

const mapStateToProps = ({ firebase, site }, { match }) => {
  const { sitesLoaded, sites } = site
  const siteId = match.params.id

  return {
    userId: firebase.auth.uid,
    siteId,
    site: (sitesLoaded && sites.find(item => item.id === siteId)) || site.site,
  }
}

const mapDispatchToProps = { fetchSite, deleteSite }

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const SiteDetailContainer = enhance(SiteDetail)
