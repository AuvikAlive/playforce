import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  onEventInputChange,
} from '../../../functions/'
import { StyledCompany } from './StyledCompany'
import { onComponentDidMount, submit } from './functions/'

export class Company extends Component {
  state = {
    postalAddress: '',
    abn: '',
    phoneNumber: '',
    website: '',
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  onEventInputChange = onEventInputChange

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
                onChange={this.onEventInputChange('postalAddress')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="ABN"
                value={abn}
                onChange={this.onEventInputChange('abn')}
                margin="normal"
              />

              <TextField
                fullWidth
                type="tel"
                label="Phone Number"
                value={phoneNumber}
                onChange={this.onEventInputChange('phoneNumber')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Website"
                value={website}
                onChange={this.onEventInputChange('website')}
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
                onClick={submit(this)}
              >
                Update
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledCompany>
    )
  }
}

Company.contextTypes = contextTypesTitleLeftNav
