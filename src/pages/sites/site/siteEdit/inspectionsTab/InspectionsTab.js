import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import DeleteIcon from 'material-ui-icons/Delete'
import Divider from 'material-ui/Divider'
import { StyledInspectionsTab } from './StyledInspectionsTab'
import Modal from '../../../../../components/modal/Modal'
import { ModalContent } from '../../siteDetail/modalContent/ModalContent'
import { data } from '../../../data'

export class InspectionsTab extends Component {
  state = {
    inspections: [],
    modalOpen: false,
  }

  componentDidMount() {
    const { id } = this.props
    const { inspections } = data.sites[id]

    this.setState({ inspections })
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <StyledInspectionsTab>
        <Paper className="paper">
          <List component="nav" disablePadding>
            {this.state.inspections.map(({ type }, index, list) => {
              return (
                <div key={type}>
                  <ListItem button>
                    <ListItemText primary={type} />
                    <ListItemIcon onClick={this.openModal}>
                      <DeleteIcon />
                    </ListItemIcon>
                  </ListItem>
                  {index !== list.length - 1 && <Divider />}
                </div>
              )
            })}
          </List>
        </Paper>
        <Modal
          open={this.state.modalOpen}
          handleClose={this.closeModal}
          hideCloseIcon
        >
          <ModalContent closeModal={this.closeModal} />
        </Modal>
      </StyledInspectionsTab>
    )
  }
}
