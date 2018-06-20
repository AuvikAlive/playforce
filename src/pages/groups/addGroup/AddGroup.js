import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { StyledAddGroup } from './StyledAddGroup'

export class AddGroup extends Component {
  state = { name: '' }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add Group')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onEventInputChange = onEventInputChange

  submit = async () => {
    const { name } = this.state
    const { setFeedback, addGroup, history } = this.props

    if (name) {
      setFeedback({ error: '', loading: true })

      try {
        await addGroup(name)

        setFeedback({ loading: false, success: 'Group published!' })

        history.goBack()
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { name } = this.state
    const { error, loading } = this.props

    return (
      <StyledAddGroup className="StyledAddGroup">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Group Name"
                value={name}
                margin="normal"
                onChange={this.onEventInputChange('name')}
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
                color="primary"
                className="submit-button"
                onClick={this.submit}
              >
                Publish
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledAddGroup>
    )
  }
}

AddGroup.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
