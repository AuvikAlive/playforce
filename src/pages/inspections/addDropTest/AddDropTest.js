import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { DropTestForm } from '../dropTestForm/DropTestForm'

export class AddDropTest extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Drop Test')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { userId, inspectionId, impactTestId, addDropTest } = this.props
    const pathHead = `/inspections/edit/${inspectionId}/impactTest/edit/${impactTestId}/editDrop/`

    return (
      <DropTestForm
        onSubmit={data => addDropTest(userId, inspectionId, impactTestId, data)}
        afterSubmit={showActionGo(this, 'Drop added!', pathHead)}
      />
    )
  }
}

AddDropTest.contextTypes = contextTypesTitleLeftNav
