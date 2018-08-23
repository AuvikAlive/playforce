import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGoBack,
} from '../../../functions/'
import MaintenanceIssueForm from '../maintenanceIssueForm/'
import { submit } from './submit'

export class AddMaintenanceIssue extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Maintenance Issue')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <MaintenanceIssueForm
        onSubmit={submit(this)}
        afterSubmit={showActionGoBack(this, 'Issue published!')}
      />
    )
  }
}

AddMaintenanceIssue.contextTypes = contextTypesTitleLeftNav
