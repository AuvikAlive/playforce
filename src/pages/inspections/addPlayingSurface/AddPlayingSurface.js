import React, { Component } from 'react'
import { NavContext } from "components/NavContextProvider/"
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
    const { addPlayingSurface } = this.props

    return (
      <PlayingSurfaceForm
        onSubmit={addPlayingSurface}
        afterSubmit={showActionGo(this, 'Surface added!', 'edit/')}
      />
    )
  }
}

AddPlayingSurface.contextType = NavContext
