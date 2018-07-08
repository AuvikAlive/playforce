import React, { Component } from 'react'
import EquipmentForm from '../equipmentForm/'
import { contextTypesTitle } from '../../../constants/'
import {
  onComponentDidMountWithTitle,
  onComponentWillUnmountWithTitle,
  showActionGo,
} from '../../../functions/'
import { submit } from './submit'

const message = 'Equipment published!'
const pathHead = 'edit/'

export class AddEquipment extends Component {
  componentDidMount() {
    const title = 'Add an Equipment'

    onComponentDidMountWithTitle(this, title)
  }

  componentWillMount() {
    onComponentWillUnmountWithTitle(this)
  }

  render() {
    return (
      <EquipmentForm
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, message, pathHead)}
      />
    )
  }
}

AddEquipment.contextTypes = contextTypesTitle
