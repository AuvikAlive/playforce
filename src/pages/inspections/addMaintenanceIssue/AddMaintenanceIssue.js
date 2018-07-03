import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGoBack,
} from '../../../functions/'
import MaintenanceIssueForm from '../maintenanceIssueForm/'
import { submit } from './submit'

const message = 'Issue published!'

export class AddMaintenanceIssue extends Component {
  componentDidMount() {
    const title = 'Add Maintenance Issue'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <MaintenanceIssueForm
        onSubmit={submit(this)}
        afterSubmit={showActionGoBack(this, message)}
      />
    )
  }
}

AddMaintenanceIssue.contextTypes = contextTypesTitleLeftNav
