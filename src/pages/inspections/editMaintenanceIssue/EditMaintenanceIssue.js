import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftRightNav,
} from '../../../functions/'
import MaintenanceIssueForm from '../maintenanceIssueForm/'
import { setRightNav, submit } from './functions/'

export class EditMaintenanceIssue extends Component {
  componentDidMount() {
    const title = 'Edit Issue'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { maintenanceIssue } = this.props

    return (
      <MaintenanceIssueForm
        buttonText="save"
        initialData={maintenanceIssue}
        onSubmit={submit(this)}
        setRightNav={setRightNav(this)}
        removeRightNav={this.context.removeRightNavComponent}
      />
    )
  }
}

EditMaintenanceIssue.contextTypes = contextTypesTitleLeftRightNav
