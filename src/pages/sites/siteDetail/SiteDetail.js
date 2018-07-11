import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftRightNav,
  showContentWhenLoaded,
} from '../../../functions/'
import { SiteCard } from '../siteCard/SiteCard'
import { StyledSiteDetail } from './StyledSiteDetail'
import { onComponentDidMount, onComponentWillReceiveProps } from './functions/'

export class SiteDetail extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { site } = this.props

    return showContentWhenLoaded(
      site,
      <StyledSiteDetail className="StyledSiteDetail">
        <SiteCard site={site} />
      </StyledSiteDetail>
    )
  }
}

SiteDetail.contextTypes = contextTypesTitleLeftRightNav
