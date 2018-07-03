import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { CoverFormContainer } from '../coverForm/CoverFormContainer'
import { submit } from './submit'

const message = 'Inspection added!'
const pathHead = 'edit/'

export class AddInspection extends Component {
  componentDidMount() {
    const title = 'Add Inspection'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <CoverFormContainer
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, message, pathHead)}
      />
    )
  }
}

AddInspection.contextTypes = contextTypesTitleLeftNav
