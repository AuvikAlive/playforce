import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EquipmentForm from '../equipmentForm/'

export class EditEquipment extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Edit Equipment')
  }

  componentWillMount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }

  render() {
    const { siteId, assetId, equipments } = this.props
    const initialData = equipments.find(item => item.assetId === assetId)

    return <EquipmentForm siteId={siteId} initialData={initialData} />
  }
}

EditEquipment.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
