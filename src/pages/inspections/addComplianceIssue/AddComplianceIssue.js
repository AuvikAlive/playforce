import React, { Component } from 'react'
import { showActionGoBack } from '../../../functions/'
import ComplianceIssueForm from '../complianceIssueForm/'
import { contextTypes } from './contextTypes'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  submit,
} from './functions/'

export class AddComplianceIssue extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    return (
      <ComplianceIssueForm
        afterSubmit={showActionGoBack(this, 'Issue published!')}
        onSubmit={submit(this)}
      />
    )
  }
}

AddComplianceIssue.contextTypes = contextTypes
