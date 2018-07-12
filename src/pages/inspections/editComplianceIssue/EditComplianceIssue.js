import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftRightNav,
} from '../../../functions/'
import ComplianceIssueForm from '../complianceIssueForm/'
import { setRightNav, submit } from './functions/'

export class EditComplianceIssue extends Component {
  componentDidMount() {
    const title = 'Edit Issue'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { complianceIssue } = this.props

    return (
      <ComplianceIssueForm
        buttonText="save"
        initialData={complianceIssue}
        onSubmit={submit(this)}
        setRightNav={setRightNav(this)}
        removeRightNav={this.context.removeRightNavComponent}
      />
    )
  }
}

EditComplianceIssue.contextTypes = contextTypesTitleLeftRightNav
