import React, { Component } from "react"
import { compose } from "recompose"
import CircularProgress from "@material-ui/core/CircularProgress"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import AddBoxIcon from "@material-ui/icons/AddBox"
import DateRangeIcon from "@material-ui/icons/DateRange"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import MenuItem from "@material-ui/core/MenuItem"
import { DatePicker } from "material-ui-pickers"
import { withFeedback } from "../../../hocs/withFeedback/withFeedback"
import { withFullscreenDialog } from "../../../hocs/withFullscreenDialog/withFullscreenDialog"
import { AutoComplete } from "../../../components/autoComplete/AutoComplete"
import { AddSiteDialogContainer } from "../../../components/addSiteDialog/AddSiteDialogContainer"
import { ClientsDialogContainer } from "../../../components/clientsDialog/ClientsDialogContainer"
import { NavContext } from "components/NavContextProvider/"
import {
  showContentWhenLoaded,
  onEventInputChange,
  onValueInputChange,
} from "../../../functions/"
import { StyledStandaloneImpactGeneralInfoForm } from "./StyledStandaloneImpactGeneralInfoForm"
import { state } from "./state"
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  getLocationSuggestions,
  getClientSuggestions,
  onClientSelect,
  submit,
} from "./functions/"

class BaseStandaloneImpactGeneralInfoForm extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  render() {
    const {
      location,
      client,
      inspectionDate,
      temperature,
      humidity,
      rain,
      apparatus,
      appliedStandards,
    } = this.state

    const {
      sitesLoaded,
      standardsLoaded,
      clientsLoaded,
      standards,
      openDialog,
      closeDialog,
      buttonText,
      error,
      loading,
    } = this.props

    const isLoaded = sitesLoaded && standardsLoaded && clientsLoaded

    return showContentWhenLoaded(
      isLoaded,
      <StyledStandaloneImpactGeneralInfoForm className="StyledStandaloneImpactGeneralInfoForm">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <div className="with-button with-autocomplete">
                <AutoComplete
                  label="Location"
                  value={location}
                  onChange={onValueInputChange(this, "location")}
                  getSuggestions={getLocationSuggestions(this)}
                />

                <IconButton
                  onClick={() =>
                    openDialog(
                      <AddSiteDialogContainer closeDialog={closeDialog} />
                    )
                  }
                >
                  <AddBoxIcon />
                </IconButton>
              </div>

              <div className="with-button with-autocomplete">
                <AutoComplete
                  label="Client"
                  value={client}
                  onChange={onValueInputChange(this, "client")}
                  onSuggestionSelect={onClientSelect(this)}
                  getSuggestions={getClientSuggestions(this)}
                />

                <IconButton
                  onClick={() =>
                    openDialog(
                      <ClientsDialogContainer closeDialog={closeDialog} />
                    )
                  }
                >
                  <AddBoxIcon />
                </IconButton>
              </div>

              <DatePicker
                fullWidth
                keyboard
                clearable
                className="date-picker"
                label="Inspection Date"
                format="DD MMMM YYYY"
                value={inspectionDate}
                keyboardIcon={<DateRangeIcon />}
                leftArrowIcon={<ArrowBackIcon />}
                rightArrowIcon={<ArrowForwardIcon />}
                onChange={onValueInputChange(this, "inspectionDate")}
                animateYearScrolling={false}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Temperature (°C)"
                value={temperature}
                onChange={onEventInputChange(this, "temperature")}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Humidity (%)"
                value={humidity}
                onChange={onEventInputChange(this, "humidity")}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Comment on rain"
                value={rain}
                onChange={onEventInputChange(this, "rain")}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Test apparatus"
                value={apparatus}
                onChange={onEventInputChange(this, "apparatus")}
              />

              <TextField
                fullWidth
                select
                SelectProps={{
                  multiple: true,
                }}
                label="Applied Standard"
                value={appliedStandards}
                onChange={onEventInputChange(this, "appliedStandards")}
                margin="normal"
              >
                {standards.length > 0 ? (
                  standards.map(({ title, code, publishDate, id }, index) => {
                    return (
                      <MenuItem key={index} value={id}>
                        {`${title} ${code}`}
                      </MenuItem>
                    )
                  })
                ) : (
                  <MenuItem value="">No standards addded</MenuItem>
                )}
              </TextField>
            </form>

            {error && <p className="error">{error}</p>}

            {!error && loading && (
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
                {buttonText ? buttonText : "Publish"}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledStandaloneImpactGeneralInfoForm>
    )
  }
}

BaseStandaloneImpactGeneralInfoForm.contextType = NavContext

const enhance = compose(
  withFeedback,
  withFullscreenDialog
)

export const StandaloneImpactGeneralInfoForm = enhance(
  BaseStandaloneImpactGeneralInfoForm
)
