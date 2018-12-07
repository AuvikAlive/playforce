import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { Content } from '../content/Content'
import {
  onEventInputChange,
  onComponentDidMountLoadData,
  onComponentWillReceivePropsLoadData,
} from '../../functions/'
import { submit } from './submit'

export class CertificateTextFormWithout extends Component {
  state = { text: '', customInspectionNumber: '' }

  componentDidMount() {
    onComponentDidMountLoadData(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadData(this, nextProps)
  }

  render() {
    const { text, customInspectionNumber } = this.state
    const { showInspectionNumber, error, loading } = this.props

    return (
      <Content>
        <Card className="card">
          <CardContent>
            <form noValidate>
              {showInspectionNumber && (
                <TextField
                  fullWidth
                  type="number"
                  margin="normal"
                  label="Inspection number"
                  value={customInspectionNumber || ''}
                  onChange={onEventInputChange(this, 'customInspectionNumber')}
                />
              )}

              <TextField
                fullWidth
                multiline
                label="Certificate text"
                value={text}
                margin="normal"
                onChange={onEventInputChange(this, 'text')}
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
                variant="contained"
                color="primary"
                className="submit-button"
                onClick={submit(this)}
              >
                save
              </Button>
            )}
          </CardContent>
        </Card>
      </Content>
    )
  }
}

export const CertificateTextForm = withFeedback(CertificateTextFormWithout)
