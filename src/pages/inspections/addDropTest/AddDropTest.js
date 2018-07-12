import React, { Component } from 'react'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { DropTestForm } from '../dropTestForm/DropTestForm'
import { contextTypes } from './contextTypes'
import { submit } from './submit'

const message = 'Drop added!'

export class AddDropTest extends Component {
  componentDidMount() {
    const title = 'Add drop test'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { inspectionId, impactTestId } = this.props
    const pathHead = `/inspections/edit/${inspectionId}/impactTest/edit/${impactTestId}/editDrop/`

    return (
      <DropTestForm
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, message, pathHead)}
      />
    )
  }
}

AddDropTest.contextTypes = contextTypes
