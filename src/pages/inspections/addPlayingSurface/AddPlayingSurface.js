import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { PlayingSurfaceForm } from '../playingSurfaceForm/PlayingSurfaceForm'
import { submit } from './submit'

export class AddPlayingSurface extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add playing surface')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <PlayingSurfaceForm
        afterSubmit={showActionGo(this, 'Surface saved!', 'edit/')}
        onSubmit={submit(this)}
      />
    )
  }
}

AddPlayingSurface.contextTypes = contextTypesTitleLeftNav
