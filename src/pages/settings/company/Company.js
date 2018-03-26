import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import { StyledCompany } from './StyledCompany'

export class Company extends Component {
  state = {
    postalAddress: '',
    abn: '',
    phoneNumber: '',
    website: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, companyInfo } = this.props

    setNavTitle('Company Information')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    if (companyInfo) {
      const { postalAddress, abn, phoneNumber, website } = companyInfo

      this.setState({
        postalAddress,
        abn,
        phoneNumber,
        website,
      })
    }
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  publish = async () => {
    const { postalAddress, abn, phoneNumber, website } = this.state

    const { firebase, setErrorLoadingState } = this.props

    setErrorLoadingState({ error: '', loading: true })

    try {
      await firebase.updateProfile({
        companyInfo: {
          postalAddress,
          abn,
          phoneNumber,
          website,
        },
      })
      setErrorLoadingState({ loading: false })
    } catch (error) {
      setErrorLoadingState({ error: error.message, loading: false })
    }
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { postalAddress, abn, phoneNumber, website } = this.state

    const { error, loading } = this.props

    return (
      <StyledCompany className="StyledCompany">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Postal Address"
                value={postalAddress}
                onChange={this.onInputChange('postalAddress')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="ABN"
                value={abn}
                onChange={this.onInputChange('abn')}
                margin="normal"
              />

              <TextField
                fullWidth
                type="tel"
                label="Phone Number"
                value={phoneNumber}
                onChange={this.onInputChange('phoneNumber')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Website"
                value={website}
                onChange={this.onInputChange('website')}
                margin="normal"
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
                onClick={this.publish}
              >
                Publish
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledCompany>
    )
  }
}

Company.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
