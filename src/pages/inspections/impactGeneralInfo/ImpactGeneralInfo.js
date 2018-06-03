import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { StyledImpactGeneralInfo } from './StyledImpactGeneralInfo'

export class ImpactGeneralInfo extends Component {
  state = { temperature: '', humidity: '', rain: '', apparatus: '' }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, impactGeneralInfo } = this.props

    setNavTitle('General Info')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )

    this.setState({ ...impactGeneralInfo })
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onEventInputChange = onEventInputChange

  submit = async () => {
    const { temperature, humidity, rain, apparatus } = this.state
    const {
      setFeedback,
      saveImpactGeneralInfo,
      userId,
      inspectionId,
    } = this.props

    if (temperature && humidity && rain && apparatus) {
      setFeedback({ error: '', loading: true })

      try {
        await saveImpactGeneralInfo(userId, inspectionId, {
          temperature,
          humidity,
          rain,
          apparatus,
        })
        setFeedback({ loading: false, success: 'Info saved!' })
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
    const { temperature, humidity, rain, apparatus } = this.state
    const { error, loading } = this.props

    return (
      <StyledImpactGeneralInfo className="StyledImpactGeneralInfo">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                margin="normal"
                label="Temperature (°C)"
                value={temperature}
                onChange={this.onEventInputChange('temperature')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Humidity (%)"
                value={humidity}
                onChange={this.onEventInputChange('humidity')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Comment on rain"
                value={rain}
                onChange={this.onEventInputChange('rain')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Test apparatus"
                value={apparatus}
                onChange={this.onEventInputChange('apparatus')}
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
      </StyledImpactGeneralInfo>
    )
  }
}

ImpactGeneralInfo.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
