import React, { Component } from 'react'
import { ClientForm } from '../../../components/clientForm/ClientForm'
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { submit } from './submit'

const message = 'Client added!'
const pathHead = 'edit/'

export class AddClient extends Component {
  componentDidMount() {
    const title = 'Add a client'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <ClientForm
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, message, pathHead)}
      />
    )
  }
}

AddClient.contextType = NavContext
