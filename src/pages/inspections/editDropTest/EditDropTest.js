import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import { onComponentWillUnmountWithTitleLeftRightNav } from '../../../functions/'
import { DropTestForm } from '../dropTestForm/DropTestForm'
import { onComponentDidMount, submit } from './functions/'

export class EditDropTest extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { dropTest } = this.props

    return (
      <DropTestForm
        buttonText="update"
        initialData={dropTest}
        onSubmit={submit(this)}
      />
    )
  }
}

EditDropTest.contextTypes = contextTypesTitleLeftRightNav
