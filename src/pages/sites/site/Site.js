import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import Card, { CardContent } from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Chip from 'material-ui/Chip'
import { Content } from '../../../components/content/Content'
import { Map } from './Map'
import Modal from '../../../components/modal/Modal'
import { ModalContent } from './modalContent/ModalContent'
import { data } from '../data'

export class Site extends Component {
  state = {
    modalOpen: false,
  }

  componentDidMount() {
    const {
      setLeftNavComponent,
      setNavTitle,
      setRightNavComponent,
      match,
      history,
    } = this.props

    const id = parseInt(match.params.id, 10) - 1
    const title = data.sites[id].name

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    setNavTitle(title)

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={this.openModal}>
        <DeleteIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const {
      removeLefNavComponent,
      removeNavTitle,
      removeRightNavComponent,
    } = this.props

    removeLefNavComponent()
    removeNavTitle()
    removeRightNavComponent()
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    const { match } = this.props

    const id = parseInt(match.params.id, 10) - 1
    const site = data.sites[id]
    const {
      latitidue,
      longitude,
      street,
      suburb,
      state,
      postcode,
      country,
      operator,
      division,
      inspections,
    } = site
    const address = `${street} , ${suburb} ${state} ${postcode}, ${country}`
    const operatorName = data.operators[operator - 1].name
    const chips = inspections.map(({ type }) => (
      <Chip
        style={{ marginTop: 8, marginRight: 8 }}
        component="span"
        label={type}
        key={type}
      />
    ))

    return (
      <Content>
        <Card>
          <Map lat={latitidue} lng={longitude} />
          <CardContent>
            <List>
              <ListItem divider>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem divider>
                <ListItemText primary="Operator" secondary={operatorName} />
              </ListItem>
              <ListItem divider>
                <ListItemText primary="Division" secondary={division} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Inspection Types" secondary={chips} />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Modal
          open={this.state.modalOpen}
          handleClose={this.closeModal}
          hideCloseIcon
        >
          <ModalContent closeModal={this.closeModal} />
        </Modal>
      </Content>
    )
  }
}
