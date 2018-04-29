import React from 'react'
import { CircularProgress } from 'material-ui/Progress'
import CheckCircleIcon from 'material-ui-icons/CheckCircle'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
// import Button from 'material-ui/Button'
// import { CircularProgress } from 'material-ui/Progress'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledInspectionItems } from './StyledInspectionItems'

export const InspectionItems = ({
  match,
  coverAdded,
  auditSummaryAdded,
  conditionRatingsAdded,
  complianceIssuesAdded,
  maintenanceIssuesAdded,
  error,
  loading,
  submit,
  buttonText,
}) => {
  return (
    <StyledInspectionItems className="StyledInspectionItems">
      <Paper>
        <List component="nav" disablePadding>
          <StyledNavLink to={`${match.url}/cover`}>
            <ListItem button>
              <ListItemText primary="Cover" />
              <CheckCircleIcon color="primary" />
            </ListItem>
          </StyledNavLink>

          <StyledNavLink to={`${match.url}/auditSummary`}>
            <ListItem button>
              <ListItemText primary="Audit Summary" />
              {auditSummaryAdded && <CheckCircleIcon color="primary" />}
            </ListItem>
          </StyledNavLink>

          <StyledNavLink to={`${match.url}/conditionRating`}>
            <ListItem button>
              <ListItemText primary="Condition Rating" />
              {conditionRatingsAdded && <CheckCircleIcon color="primary" />}
            </ListItem>
          </StyledNavLink>

          <StyledNavLink to={`${match.url}/complianceIssues`}>
            <ListItem button>
              <ListItemText primary="Identified Compliance Issues" />
              {complianceIssuesAdded && <CheckCircleIcon color="primary" />}
            </ListItem>
          </StyledNavLink>

          <StyledNavLink to={`${match.url}/maintenanceIssues`}>
            <ListItem button>
              <ListItemText primary="Identified Maintenance Issues" />
              {maintenanceIssuesAdded && <CheckCircleIcon color="primary" />}
            </ListItem>
          </StyledNavLink>

          <ListItem>{error && <p className="error">{error}</p>}</ListItem>

          {!error &&
            loading && (
              <ListItem className="custom-loading">
                <CircularProgress />
              </ListItem>
            )}

          {/* {!loading && (
            <div className="button-container">
              <Button
                fullWidth
                disabled={!coverAdded}
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={submit}
              >
                {buttonText ? buttonText : 'Publish'}
              </Button>
            </div>
          )} */}
        </List>
      </Paper>
    </StyledInspectionItems>
  )
}
