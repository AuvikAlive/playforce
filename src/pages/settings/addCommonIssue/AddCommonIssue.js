import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import CommonIssueForm from '../commonIssueForm/'
import { submit } from './submit'

const message = 'Common issue added!'
const pathHead = 'edit/'

export class AddCommonIssue extends Component {
  componentDidMount() {
    const title = 'Add a Common Issue'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <CommonIssueForm
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, message, pathHead)}
      />
    )
  }
}

AddCommonIssue.contextTypes = contextTypesTitleLeftNav
