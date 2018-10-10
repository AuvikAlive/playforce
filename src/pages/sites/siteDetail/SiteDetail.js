import React, { Component } from 'react'
import { Content } from '../../../components/content/Content'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftRightNav,
  showContentWhenLoaded,
} from '../../../functions/'
import { SiteCard } from '../siteCard/SiteCard'
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
      <Content>
        <SiteCard site={site} />
      </Content>
    )
  }
}

SiteDetail.contextTypes = contextTypesTitleLeftRightNav
