import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import DirectionsIcon from 'material-ui-icons/Directions'
import { LinearProgress } from 'material-ui/Progress'
import { SiteCard } from '../siteCard/SiteCard'
import { StyledSiteDetail } from './StyledSiteDetail'

export class SiteDetail extends Component {
  componentDidMount() {
    const { site, fetchSite, userId, siteId } = this.props

    site && this.setup(site)
    !site && fetchSite(userId, siteId)
  }

  componentWillReceiveProps({ site }) {
    if (!!site && site !== this.props.site) {
      this.setup(site)
    }
  }

  componentWillUnmount() {
    const {
      removeLefNavComponent,
      removeNavTitle,
      removeRightNavComponent,
    } = this.context

    removeLefNavComponent()
    removeNavTitle()
    removeRightNavComponent()
  }

  setup = site => {
    const { history, openDialog } = this.props

    const {
      setLeftNavComponent,
      setRightNavComponent,
      setNavTitle,
    } = this.context

    const { name, street, suburb, state, postcode, country } = site
    const address = `${street}+${suburb}+${state}+${postcode}+${country}`
    const encodedAddress = encodeURI(address)

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )
    setNavTitle(name)
    setRightNavComponent(
      <div>
        <a
          target="_blank"
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <IconButton color="inherit" aria-label="Directions">
            <DirectionsIcon />
          </IconButton>
        </a>
        <IconButton
          color="inherit"
          aria-label="Search"
          onClick={() => openDialog(this.delete)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    )
  }

  showActionGoBack = async () => {
    const { setFeedback, history } = this.props

    await setFeedback({ success: 'Site deleted!' })
    history.goBack()
  }

  delete = async () => {
    const { deleteSite, userId, siteId } = this.props

    await deleteSite(userId, siteId)
    this.showActionGoBack()
  }

  render() {
    const { site } = this.props

    return site ? (
      <StyledSiteDetail className="StyledSiteDetail">
        <SiteCard site={site} />
      </StyledSiteDetail>
    ) : (
      <LinearProgress />
    )
  }
}

SiteDetail.contextTypes = {
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
