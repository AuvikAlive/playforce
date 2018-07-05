import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import StandardForm from '../standardForm/'
import { submit } from './submit'

const message = 'Standard added!'
const pathHead = 'edit/'

export class AddStandard extends Component {
  componentDidMount() {
    const title = 'Add a Standard'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <StandardForm
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, message, pathHead)}
      />
    )
  }
}

AddStandard.contextTypes = contextTypesTitleLeftNav
