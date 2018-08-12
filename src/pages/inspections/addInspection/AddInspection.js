import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { CoverFormContainer } from '../coverForm/CoverFormContainer'
import { submit } from './submit'

export class AddInspection extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Inspection')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <CoverFormContainer
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, 'Inspection added!', 'edit/')}
      />
    )
  }
}

AddInspection.contextTypes = contextTypesTitleLeftNav
