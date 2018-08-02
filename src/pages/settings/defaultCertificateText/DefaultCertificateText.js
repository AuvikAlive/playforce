import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  onEventInputChange,
} from '../../../functions/'
import { StyledDefaultCertificateText } from './StyledDefaultCertificateText'
import { onComponentDidMount, submit } from './functions/'

export class DefaultCertificateText extends Component {
  state = { defaultCertificateText: '' }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { defaultCertificateText } = this.state
    const { error, loading } = this.props

    return (
      <StyledDefaultCertificateText className="StyledDefaultCertificateText">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                multiline
                label="Recommendation"
                value={defaultCertificateText}
                margin="normal"
                onChange={onEventInputChange(this, 'defaultCertificateText')}
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
                save
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledDefaultCertificateText>
    )
  }
}

DefaultCertificateText.contextTypes = contextTypesTitleLeftNav
