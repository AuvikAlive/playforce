import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Chip from 'material-ui/Chip'
import { Content } from '../../../components/content/Content'
import Button from 'material-ui/Button'
import Modal from '../../../components/modal/Modal'
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
      <Chip component="span" label={type} key={type} />
    ))

    return (
      <Content>
        <Card>
          <CardContent>
            <List>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Operator" secondary={operatorName} />
              </ListItem>
              <ListItem>
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
          <Card style={{ width: 300, height: 103 }}>
            <CardContent>Delete this site?</CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}>
              <Button size="small" onClick={this.closeModal}>
                Cancel
              </Button>
              <Button size="small" onClick={this.closeModal}>
                OK
              </Button>
            </CardActions>
          </Card>
        </Modal>
      </Content>
    )
  }
}
