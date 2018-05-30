import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { StyledImpactGeneralInfo } from './StyledImpactGeneralInfo'

export class ImpactGeneralInfo extends Component {
  state = { temperature: '', humidity: '', rain: '', apparatus: '' }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

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
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  render() {
    const { temperature, humidity, rain, apparatus } = this.state

    return (
      <StyledImpactGeneralInfo className="StyledImpactGeneralInfo">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Temperature (°C)"
                value={temperature}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Humidity (%)"
                value={humidity}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Comment on rain"
                value={rain}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Test apparatus"
                value={apparatus}
                margin="normal"
              />
            </form>
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
