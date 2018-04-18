import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import EquipmentForm from '../equipmentForm/'

export class EditEquipment extends Component {
  componentDidMount() {
    const { setNavTitle, setRightNavComponent } = this.context
    const {
      openModal,
      equipment,
      fetchEquipment,
      userId,
      siteId,
      assetId,
    } = this.props

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

    !equipment && fetchEquipment(userId, siteId, assetId)
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
    const { siteId, equipment } = this.props

    return <EquipmentForm siteId={siteId} initialData={equipment} />
  }
}

EditEquipment.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
