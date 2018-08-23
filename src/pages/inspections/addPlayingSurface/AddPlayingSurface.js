import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { PlayingSurfaceForm } from '../playingSurfaceForm/PlayingSurfaceForm'

export class AddPlayingSurface extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Playing Surface')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { addPlayingSurface, userId, inspectionId } = this.props

    return (
      <PlayingSurfaceForm
        onSubmit={data => addPlayingSurface(userId, inspectionId, data)}
        afterSubmit={showActionGo(this, 'Surface added!', 'edit/')}
      />
    )
  }
}

AddPlayingSurface.contextTypes = contextTypesTitleLeftNav
