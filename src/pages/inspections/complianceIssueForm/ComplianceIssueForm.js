import React, { Component } from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import TextField from "@material-ui/core/TextField"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Fab from "@material-ui/core/Fab"
import Button from "@material-ui/core/Button"
import BrushIcon from "@material-ui/icons/Brush"
import { NavContext } from "components/NavContextProvider/"
import StayCurrentPortraitIcon from "@material-ui/icons/StayCurrentPortrait"
import { AutoComplete } from "../../../components/autoComplete/AutoComplete"
import { Carousel } from "../../../components/carousel/Carousel"
import { Sketch } from "../../../components/sketch/Sketch"
import { probabilities, severities } from "../../../constants/"
import {
  onEventInputChange,
  onValueInputChange,
  saveEditedImages,
  getRiskLevel,
  getImagesCopy,
  showContentWhenLoaded,
  closeMenu,
} from "../../../functions/"
import { StyledComplianceIssueForm } from "./StyledComplianceIssueForm"
import { CommonIssueAutoComplete } from "../commonIssueAutoComplete/CommonIssueAutoComplete"
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  onCommonIssueSelect,
  onEquipmentSelect,
  getEquipmentSuggestions,
  getPlayingSurfaceSuggestions,
  toggleMode,
  submit,
} from "./functions/"
import { state } from "./state"

export class ComplianceIssueForm extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  render() {
    const {
      commonIssuesLoaded,
      equipmentsLoaded,
      commonIssues,
      captureImage,
      openDialog,
      closeDialog,
      buttonText,
      error,
      loading,
    } = this.props

    const {
      images,
      finding,
      equipment,
      playingSurface,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
      menuAnchor,
      playingSurfaceMode,
    } = this.state

    const riskLevel = getRiskLevel(probability, severity)
    const imagesCopy = getImagesCopy(images)
    const isLoaded = commonIssuesLoaded && equipmentsLoaded
    // const imageLoaded = images && images.length === 1
    const imagesLoaded = images && images.length > 0

    return showContentWhenLoaded(
      isLoaded,
      <StyledComplianceIssueForm className="StyledComplianceIssueForm">
        <Card className="card">
          {/* {imageLoaded && <img src={images[0].image} alt="equipment type" />} */}
          {imagesLoaded && <Carousel images={images} showLightbox />}

          <CardContent className="card-content">
            {images && images.length > 0 && (
              <Fab
                color="primary"
                aria-label="edit compliance issue"
                className="floating-icon"
                onClick={() =>
                  openDialog(
                    <Sketch
                      aspectRatio={188 / 253}
                      images={imagesCopy}
                      onSubmit={saveEditedImages(this)}
                      closeSketchDialog={closeDialog}
                    />
                  )
                }
              >
                <BrushIcon />
              </Fab>
            )}

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
              onClick={() =>
                captureImage({
                  width: 512,
                  height: (512 * 253) / 188,
                  multiple: true,
                })
              }
            >
              Capture Image(s)
              <StayCurrentPortraitIcon className="button-icon" />
            </Button>

            <form noValidate>
              {playingSurfaceMode ? (
                <AutoComplete
                  label="Playing Surface"
                  value={playingSurface}
                  onChange={onValueInputChange(this, "playingSurface")}
                  getSuggestions={getPlayingSurfaceSuggestions(this)}
                />
              ) : (
                <AutoComplete
                  label="Equipment"
                  value={equipment}
                  onChange={onValueInputChange(this, "equipment")}
                  onSuggestionSelect={onEquipmentSelect(this)}
                  getSuggestions={getEquipmentSuggestions(this)}
                />
              )}

              <CommonIssueAutoComplete
                commonIssues={commonIssues}
                onCommonIssueSelect={onCommonIssueSelect(this)}
              />

              <TextField
                fullWidth
                multiline
                label="Finding"
                value={finding}
                margin="normal"
                onChange={onEventInputChange(this, "finding")}
              />

              <TextField
                fullWidth
                label="Standards Clause"
                value={standardsClause}
                onChange={onEventInputChange(this, "standardsClause")}
                margin="normal"
              />

              <Grid container>
                <Grid item xs={12}>
                  <InputLabel className="risk-assessment">
                    Risk Assessment
                  </InputLabel>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    select
                    label="Probability"
                    value={probability}
                    onChange={onEventInputChange(this, "probability")}
                    margin="normal"
                  >
                    {probabilities.map(({ probability, value }, index) => (
                      <MenuItem key={index} value={value}>
                        {probability}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    select
                    label="Injury Severity"
                    value={severity}
                    onChange={onEventInputChange(this, "severity")}
                    margin="normal"
                  >
                    {severities.map(({ serverity, value }, index) => (
                      <MenuItem key={index} value={value}>
                        {serverity}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    disabled
                    fullWidth
                    label="Risk Level"
                    value={riskLevel}
                    margin="normal"
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                multiline
                label="Comments"
                value={comments}
                margin="normal"
                onChange={onEventInputChange(this, "comments")}
              />

              <TextField
                fullWidth
                multiline
                label="Recommendations"
                value={recommendations}
                margin="normal"
                onChange={onEventInputChange(this, "recommendations")}
              />
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

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu(this)}
          MenuListProps={{ disablePadding: true }}
        >
          {playingSurfaceMode ? (
            <MenuItem onClick={toggleMode(this)}>Add Equipment Issue</MenuItem>
          ) : (
            <MenuItem onClick={toggleMode(this)}>
              Add Playing Surface Issue
            </MenuItem>
          )}
        </Menu>
      </StyledComplianceIssueForm>
    )
  }
}

ComplianceIssueForm.contextType = NavContext
