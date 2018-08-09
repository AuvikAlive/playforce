import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import { onComponentWillUnmountWithTitleLeftRightNav } from '../../../functions/'
import { PlayingSurfaceForm } from '../playingSurfaceForm/PlayingSurfaceForm'
import { submit } from './submit'

export class EditPlayingSurface extends Component {
  componentDidMount() {}

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { playingSurface } = this.props

    return (
      <PlayingSurfaceForm
        buttonText="save"
        initialData={playingSurface}
        onSubmit={submit(this)}
      />
    )
  }
}

EditPlayingSurface.contextTypes = contextTypesTitleLeftNav
