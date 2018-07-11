import React, { Component } from 'react'
import { SiteFormContainer } from '../../../components/siteForm/SiteFormContainer'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { submit } from './submit'

const message = 'Site published!'
const pathHead = '/sites/'

export class AddSite extends Component {
  componentDidMount() {
    const title = 'Add Site'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <SiteFormContainer
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, message, pathHead)}
      />
    )
  }
}

AddSite.contextTypes = contextTypesTitleLeftNav
