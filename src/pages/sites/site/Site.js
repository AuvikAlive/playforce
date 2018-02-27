import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import Card, { CardActions, CardContent } from 'material-ui/Card'
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

    const id = match.params.id
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
    return (
      <Content>
        A site
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
