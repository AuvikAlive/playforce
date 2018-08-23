import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { CoverFormContainer } from '../coverForm/CoverFormContainer'

export class AddInspection extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Inspection')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { addInspection, userId } = this.props

    return (
      <CoverFormContainer
        onSubmit={data => addInspection(userId, data)}
        afterSubmit={showActionGo(this, 'Inspection added!', 'edit/')}
      />
    )
  }
}

AddInspection.contextTypes = contextTypesTitleLeftNav
