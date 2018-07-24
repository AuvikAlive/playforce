import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { contextTypesUnsubscriber } from '../../constants/'
import {
  onComponentWillReceivePropsLoadData,
  showContentWhenLoaded,
} from '../../functions/'
import { OperatorsDialogContainer } from '../operatorsDialog/OperatorsDialogContainer'
import { AutoComplete } from '../autoComplete/AutoComplete'
import { onEventInputChange, onValueInputChange } from '../../functions/'
import { StyledSiteForm } from './StyledSiteForm'
import { state } from './state'
import {
  onComponentDidMount,
  getPlaceSuggestions,
  getOperatorSuggestions,
  submit,
} from './functions/'

export class SiteForm extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadData(this, nextProps)
  }

  render() {
    const {
      name,
      street,
      suburb,
      state,
      postcode,
      country,
      division,
      operator,
    } = this.state

    const {
      operatorsLoaded,
      openDialog,
      buttonText,
      error,
      loading,
    } = this.props

    return showContentWhenLoaded(
      operatorsLoaded,
      <StyledSiteForm className="StyledSiteForm">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <AutoComplete
                label="Name"
                value={name}
                onChange={onValueInputChange(this, 'name')}
                getSuggestions={getPlaceSuggestions(this, 'establishment')}
              />

              <AutoComplete
                label="Street"
                value={street}
                onChange={onValueInputChange(this, 'street')}
                getSuggestions={getPlaceSuggestions(this, '(regions)')}
              />

              <AutoComplete
                label="Suburb"
                value={suburb}
                onChange={onValueInputChange(this, 'suburb')}
                getSuggestions={getPlaceSuggestions(this, '(regions)')}
              />

              <AutoComplete
                label="State"
                value={state}
                onChange={onValueInputChange(this, 'state')}
                getSuggestions={getPlaceSuggestions(this, '(regions)')}
              />

              <AutoComplete
                label="Postcode"
                value={postcode}
                onChange={onValueInputChange(this, 'postcode')}
                getSuggestions={getPlaceSuggestions(this, '(regions)')}
              />

              <AutoComplete
                label="Country"
                value={country}
                onChange={onValueInputChange(this, 'country')}
                getSuggestions={getPlaceSuggestions(this, '(regions)')}
              />

              <TextField
                fullWidth
                type="number"
                label="Division"
                value={division}
                onChange={onEventInputChange(this, 'division')}
                margin="normal"
              />

              <div className="with-button">
                <AutoComplete
                  label="Operator"
                  value={operator}
                  onChange={onValueInputChange(this, 'operator')}
                  getSuggestions={getOperatorSuggestions(this)}
                />
                <IconButton
                  onClick={() => openDialog(OperatorsDialogContainer)}
                >
                  <AddBoxIcon />
                </IconButton>
              </div>
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
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledSiteForm>
    )
  }
}

SiteForm.contextTypes = contextTypesUnsubscriber
