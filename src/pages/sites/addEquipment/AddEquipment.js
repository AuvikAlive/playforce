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

  submit = async data => {
    const { saveEquipment, userId, setFeedback, siteId } = this.props

    await saveEquipment(userId, siteId, data)
    setFeedback({ success: 'Equipment published!' })
  }

  render() {
    return <EquipmentForm onSubmit={this.submit} />
  }
}

AddEquipment.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
