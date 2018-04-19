import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import Card, { CardContent } from 'material-ui/Card'
import { MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import { StyledGeneralTab } from './StyledGeneralTab'

export class GeneralTab extends Component {
  state = {
    operator: '',
    name: '',
    address: '',
    division: '',
  }

  componentDidMount() {
    this.context.setNavTitle('Edit Site')
    const { fetchOperators, site, fetchSite, userId, siteId } = this.props

    fetchOperators(userId)
    !site && fetchSite(userId, siteId)
  }

  componentWillReceiveProps(nextProps) {
    const { site } = nextProps

    if (site) {
      this.setup(site)
    }
  }

  setup = site => {
    const {
      name,
      street,
      suburb,
      state,
      postcode,
      country,
      operator,
      division,
    } = site
    const address = `${street} , ${suburb} ${state} ${postcode}, ${country}`

    this.setState({ operator, name, address, division })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submit = async () => {
    const { name, address, division, operator } = this.state
    const { setFeedback } = this.props

    if (name && address && division && operator) {
      setFeedback({ error: '', loading: true })

      const { saveSite, userId, siteId, history } = this.props
      const updatedData = { name, address, division, operator }

      try {
        await saveSite(userId, updatedData, siteId)
        history.goBack()
        setFeedback({ loading: false })
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({ error: 'Please fill up the form properly!' })
    }
  }

  render() {
    const { operator, name, address, division } = this.state
    const { operatorsLoaded, operators, error, loading } = this.props

    return operatorsLoaded ? (
      <StyledGeneralTab className="StyledGeneralTab">
        <Card className="card">
          <CardContent>
            <TextField
              fullWidth
              id="operator"
              select
              label="Operator"
              value={operator}
              onChange={this.onInputChange('operator')}
              margin="normal"
            >
              {operators.map(option => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              id="name"
              label="Name"
              value={name}
              onChange={this.onInputChange('name')}
              margin="normal"
            />

            <TextField
              fullWidth
              id="address"
              label="Address"
              value={address}
              onChange={this.onInputChange('address')}
              margin="normal"
            />

            <TextField
              fullWidth
              id="division"
              label="Division"
              value={division}
              onChange={this.onInputChange('division')}
              margin="normal"
            />

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
                Update
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledGeneralTab>
    ) : (
      <LinearProgress />
    )
  }
}

GeneralTab.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
