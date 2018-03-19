import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import ArrowForwardIcon from 'material-ui-icons/ArrowForward'
import DateRangeIcon from 'material-ui-icons/DateRange'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { DatePicker } from 'material-ui-pickers'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import Modal from '../../../components/modal/Modal'
import { ModalDeleteContent } from '../../../components/modalDeleteContent/ModalDeleteContent'
import { StyledEditStandard } from './StyledEditStandard'

export class EditStandard extends Component {
  state = {
    code: '',
    title: '',
    publishDate: new Date(),
    modalOpen: false,
    error: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, firestore, userId, standardId } = this.props

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'standards', doc: standardId }],
    })

    setNavTitle('Edit Standard')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context
    const { firestore, userId, standardId } = this.props

    removeNavTitle()
    removeLefNavComponent()

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'standards', doc: standardId }],
    })
  }

  componentWillReceiveProps({ standard }) {
    if (standard) {
      const { code, title, publishDate } = standard

      this.setState({ code, title, publishDate })
    }
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onDateChange = date => {
    this.setState({ publishDate: date })
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  publish = async () => {
    const { code, title, publishDate } = this.state
    const { firestore, userId, standardId } = this.props

    if (code && title && publishDate) {
      this.setState({ error: '', loading: true })

      try {
        await firestore.update(
          {
            collection: 'users',
            doc: userId,
            subcollections: [{ collection: 'standards', doc: standardId }],
          },
          { code, title, publishDate },
        )
        this.setState({ loading: false })
      } catch (error) {
        this.setState({ error: error.message, loading: false })
      }
    } else {
      this.setState({
        error: 'Please fill up the form correctly!',
        loading: false,
      })
    }
  }

  delete = async () => {
    const { history, firestore, userId, standardId } = this.props

    try {
      await firestore.delete({
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'standards', doc: standardId }],
      })

      this.setState({ loading: false })
      history.goBack()
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
  }

  render() {
    const { code, title, publishDate, modalOpen, error, loading } = this.state

    return (
      <StyledEditStandard className="StyledEditStandard">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Code"
                value={code}
                onChange={this.onInputChange('code')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={this.onInputChange('title')}
                margin="normal"
              />

              <DatePicker
                fullWidth
                keyboard
                clearable
                className="publish-date"
                label="Date of Publish"
                format="DD MMMM YYYY"
                value={publishDate}
                keyboardIcon={<DateRangeIcon />}
                leftArrowIcon={<ArrowBackIcon />}
                rightArrowIcon={<ArrowForwardIcon />}
                onChange={this.onDateChange}
                animateYearScrolling={false}
              />
            </form>

            {error && <p className="error">{error}</p>}

            {!error &&
              loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}

            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="inherit"
                className="submit-button discard-button"
                onClick={this.openModal}
              >
                Delete
              </Button>
            )}

            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.publish}
              >
                Publish
              </Button>
            )}
          </CardContent>
        </Card>

        <Modal open={modalOpen} handleClose={this.closeModal} hideCloseIcon>
          <ModalDeleteContent
            handleConfirmation={this.delete}
            closeModal={this.closeModal}
          />
        </Modal>
      </StyledEditStandard>
    )
  }
}

EditStandard.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
