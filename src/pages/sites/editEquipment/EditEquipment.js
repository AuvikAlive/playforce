import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import EquipmentForm from '../equipmentForm/'

export class EditEquipment extends Component {
  componentDidMount() {
    const { setNavTitle, setRightNavComponent } = this.context
    const { openModal } = this.props

    setNavTitle('Edit Equipment')
    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="Search"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeRightNavComponent } = this.context

    removeNavTitle()
    removeRightNavComponent()
  }

  delete = async () => {
    const { deleteEquipment, userId, siteId, assetId, history } = this.props

    await deleteEquipment(userId, siteId, assetId)
    history.goBack()
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
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
