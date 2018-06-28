import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { StyledPreimplementationRecommendation } from './StyledPreimplementationRecommendation'

export class PreimplementationRecommendation extends Component {
  state = { preimplementationRecommendation: '' }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, preimplementationRecommendation } = this.props

    setNavTitle('Preimplementation Recommendation')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    preimplementationRecommendation &&
      this.setState({ preimplementationRecommendation })
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onEventInputChange = onEventInputChange

  submit = async () => {
    const { updateProfile, setFeedback } = this.props
    const { preimplementationRecommendation } = this.state

    setFeedback({ error: '', loading: true })

    if (preimplementationRecommendation) {
      try {
        await updateProfile({ preimplementationRecommendation })
        setFeedback({ success: 'Recommendation updated!', loading: false })
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
        loading: false,
      })
    }
  }

  render() {
    const { preimplementationRecommendation } = this.state
    const { error, loading } = this.props

    return (
      <StyledPreimplementationRecommendation className="StyledPreimplementationRecommendation">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                multiline
                label="Recommendation"
                value={preimplementationRecommendation}
                margin="normal"
                onChange={this.onEventInputChange(
                  'preimplementationRecommendation'
                )}
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
                save
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledPreimplementationRecommendation>
    )
  }
}

PreimplementationRecommendation.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
