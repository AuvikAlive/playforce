import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EquipmentForm from '../equipmentForm/'

export class AddEquipment extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Add an Equipment')
  }

  componentWillMount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }

  render() {
    const { siteId } = this.props

    return <EquipmentForm siteId={siteId} />
  }
}

AddEquipment.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
