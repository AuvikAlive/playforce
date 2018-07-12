import React, { Component } from 'react'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  showContentWhenLoaded,
} from '../../../functions/'
import { CoverFormContainer } from '../coverForm/CoverFormContainer'
import { onComponentDidMount, submit } from './functions/'

export class EditCover extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { inspectionLoaded, cover } = this.props

    return showContentWhenLoaded(
      inspectionLoaded,
      <CoverFormContainer
        buttonText="save"
        onSubmit={submit(this)}
        initialData={cover}
      />
    )
  }
}

EditCover.contextTypes = contextTypesTitleLeftNavUnsubscriber
