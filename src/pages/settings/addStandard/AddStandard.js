import React, { Component } from 'react'
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import StandardForm from '../standardForm/'
import { submit } from './submit'

export class AddStandard extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Standard')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <StandardForm
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, 'Standard added!', 'edit/')}
      />
    )
  }
}

AddStandard.contextType = NavContext
