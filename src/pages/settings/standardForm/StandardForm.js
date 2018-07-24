import React, { Component } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import DateRangeIcon from '@material-ui/icons/DateRange'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import { DatePicker } from 'material-ui-pickers'
import {
  onComponentDidMountLoadData,
  onComponentWillReceivePropsLoadData,
  onEventInputChange,
  onValueInputChange,
} from '../../../functions/'
import { StyledStandardForm } from './StyledStandardForm'
import { submit } from './submit'

export class StandardForm extends Component {
  state = {
    code: '',
    title: '',
    publishDate: new Date(),
  }

  componentDidMount() {
    onComponentDidMountLoadData(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadData(this, nextProps)
  }

  render() {
    const { code, title, publishDate } = this.state
    const { error, loading, buttonText } = this.props

    return (
      <StyledStandardForm className="StyledStandardForm">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Code"
                value={code}
                onChange={onEventInputChange(this, 'code')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={onEventInputChange(this, 'title')}
                margin="normal"
              />

              <DatePicker
                fullWidth
                keyboard
                clearable
                className="date-picker"
                label="Date of Publish"
                format="DD MMMM YYYY"
                value={publishDate}
                keyboardIcon={<DateRangeIcon />}
                leftArrowIcon={<ArrowBackIcon />}
                rightArrowIcon={<ArrowForwardIcon />}
                onChange={onValueInputChange(this, 'publishDate')}
                animateYearScrolling={false}
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
      </StyledStandardForm>
    )
  }
}
