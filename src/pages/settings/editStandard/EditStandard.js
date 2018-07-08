import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  showContentWhenLoaded,
} from '../../../functions/'
import StandardForm from '../standardForm/'
import { onComponentDidMount, submit } from './functions/'

export class EditStandard extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { standard } = this.props

    return showContentWhenLoaded(
      standard,
      <StandardForm
        initialData={standard}
        buttonText="Update"
        onSubmit={submit(this)}
      />
    )
  }
}

EditStandard.contextTypes = contextTypesTitleLeftRightNav
