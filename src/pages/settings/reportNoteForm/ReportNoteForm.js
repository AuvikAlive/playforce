import React, { Component } from 'react'
import { compose } from 'recompose'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { Content } from '../../../components/content/Content'
import {
  onComponentDidMountLoadData,
  onComponentWillReceivePropsLoadData,
  onEventInputChange,
} from '../../../functions/'
import { state } from './state'
import { submit } from './submit'

class BaseReportNoteForm extends Component {
  state = state

  componentDidMount() {
    onComponentDidMountLoadData(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadData(this, nextProps)
  }

  render() {
    const { number, title, description } = this.state
    const { error, loading, buttonText } = this.props

    return (
      <Content>
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Number"
                type="number"
                value={number}
                onChange={onEventInputChange(this, 'number')}
                margin="normal"
              />

              <TextField
                fullWidth
                multiline
                label="Title"
                value={title}
                onChange={onEventInputChange(this, 'title')}
                margin="normal"
              />

              <TextField
                fullWidth
                multiline
                label="Description"
                value={description}
                onChange={onEventInputChange(this, 'description')}
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
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </Content>
    )
  }
}

const enhance = compose(withFeedback)

export const ReportNoteForm = enhance(BaseReportNoteForm)
