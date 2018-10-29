import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import ModeEditIcon from '@material-ui/icons/Edit'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { format } from 'date-fns/esm'
import { flatten, map, filter } from 'lodash'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { EmptyInspectionListPlaceholder } from '../../../components/emptyInspectionListPlaceholder/EmptyInspectionListPlaceholder'
import { ListAvatar } from '../../../components/listAvatar/ListAvatar'

export const GridView = ({ inspections, match, standards }) => {
  return inspections.length > 0 ? (
    <Grid container spacing={16}>
      {inspections.map(
        (
          {
            id,
            cover,
            impactGeneralInfo,
            inspectionNumber,
            coverAdded,
            auditSummaryAdded,
            conditionRatingsAdded,
            complianceIssuesAdded,
            maintenanceIssuesAdded,
          },
          index
        ) => {
          const { location, client, image, inspectionDate, appliedStandards } =
            cover || impactGeneralInfo

          const { name, suburb } = location

          const completed =
            coverAdded && auditSummaryAdded && conditionRatingsAdded

          const filteredAppliedStandards = flatten(
            map(appliedStandards, standardId => {
              return filter(standards, item => item.id === standardId)
            })
          )

          const standardItems = filteredAppliedStandards.map(
            ({ code, title }, index) => (index === 0 ? `${code}` : `, ${code}`)
          )

          return (
            <Grid item key={index} xs={12} sm={6} md={4} xl={3}>
              <List>
                <Card className="card">
                  <ListItem divider button className="list-item">
                    <ListAvatar text={inspectionNumber} />

                    <ListItemText
                      primary={
                        <div className="title">{`${name}, ${suburb}`}</div>
                      }
                      secondary={client}
                    />

                    <ListItemSecondaryAction className="secondary-actions">
                      <CheckCircleIcon
                        style={{
                          visibility: completed ? '' : 'hidden',
                        }}
                        color="primary"
                        className="icon"
                      />
                    </ListItemSecondaryAction>
                  </ListItem>

                  <div className="placeholder">
                    {image && <img src={image} alt="cover" />}
                  </div>

                  <CardContent className="card-content">
                    <StyledNavLink
                      to={{
                        pathname: `${match.url}/edit/${id}`,
                        state: {
                          id,
                        },
                      }}
                      className="edit-icon"
                    >
                      <Button
                        variant="fab"
                        color="primary"
                        aria-label="edit compliance issue"
                      >
                        <ModeEditIcon />
                      </Button>
                    </StyledNavLink>

                    <Typography variant="subheading">
                      Inspection Date: {format(inspectionDate, 'DD MMMM YYYY')}
                    </Typography>

                    <Typography variant="subheading">
                      Applied Standards: {standardItems.join('')}
                    </Typography>
                  </CardContent>
                </Card>
              </List>
            </Grid>
          )
        }
      )}
    </Grid>
  ) : (
    <EmptyInspectionListPlaceholder />
  )
}
