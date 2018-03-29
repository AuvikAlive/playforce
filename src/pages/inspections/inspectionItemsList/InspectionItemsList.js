import React from 'react'
import CheckCircleIcon from 'material-ui-icons/CheckCircle'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { StyledInspectionItemsList } from './StyledInspectionItemsList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export const InspectionItemsList = ({
  match,
  auditSummaryAdded,
  complianceIssuesAdded,
  conditionRatingsAdded,
  coverAdded,
  maintenanceIssuesAdded,
  error,
  loading,
  publish,
  reportButton,
}) => {
  return (
    <StyledInspectionItemsList className="StyledInspectionItemsList">
      <Paper>
        <List component="nav" disablePadding>
          <StyledNavLink to={`${match.url}/cover`}>
            <ListItem button>
              <ListItemText primary="Cover" />
              {coverAdded && <CheckCircleIcon color="primary" />}
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

          {!loading && (
            <div className="button-container">
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={publish}
              >
                Publish
              </Button>
            </div>
          )}

          {reportButton &&
            !loading && <div className="button-container">{reportButton}</div>}
        </List>
      </Paper>
    </StyledInspectionItemsList>
  )
}
