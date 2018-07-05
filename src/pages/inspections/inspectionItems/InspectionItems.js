import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { isEmpty } from 'lodash'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledInspectionItems } from './StyledInspectionItems'

export const InspectionItems = ({
  match,
  error,
  loading,
  submit,
  buttonText,
  inspection,
}) => {
  const {
    auditSummary,
    complianceIssuesAdded,
    conditionRatingsAdded,
    maintenanceIssuesAdded,
    impactGeneralInfo,
    impactTests,
  } = inspection
  const auditSummaryAdded = !isEmpty(auditSummary)
  const impactGeneralInfoAdded = !isEmpty(impactGeneralInfo)
  const impactTestsAdded =
    !!impactTests &&
    impactTests.some(({ dropTests }) => !!dropTests && dropTests.length > 0)

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

          {impactGeneralInfoAdded && (
            <StyledNavLink to={`${match.url}/impactTest`}>
              <ListItem button>
                <ListItemText primary="Impact Attenuation Test" />
                {impactTestsAdded && <CheckCircleIcon color="primary" />}
              </ListItem>
            </StyledNavLink>
          )}

          {error && (
            <ListItem>
              <p className="error">{error}</p>
            </ListItem>
          )}

          {!error &&
            loading && (
              <ListItem className="custom-loading">
                <CircularProgress />
              </ListItem>
            )}
        </List>
      </Paper>
    </StyledInspectionItems>
  )
}
