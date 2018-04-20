import React from 'react'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import CheckCircleIcon from 'material-ui-icons/CheckCircle'
import Typography from 'material-ui/Typography'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { format } from 'date-fns/esm'
import { flatten, map, filter } from 'lodash'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export const GridView = ({ inspections, match, standards }) => {
  return inspections.length > 0 ? (
    <Grid container>
      {inspections.map(
        (
          {
            id,
            cover,
            inspectionNumber,
            coverAdded,
            auditSummaryAdded,
            conditionRatingsAdded,
            complianceIssuesAdded,
            maintenanceIssuesAdded,
          },
          index
        ) => {
          const { location, client, image, inspectionDate } = cover
          const { name, suburb } = location
          // const reportTypes = [
          //   'Comprehensive',
          //   'Operational',
          //   'Routine',
          // ]
          const completed =
            coverAdded && auditSummaryAdded && conditionRatingsAdded

          const appliedStandards = flatten(
            map(cover.appliedStandards, standardId => {
              return filter(standards, item => item.id === standardId)
            })
          )

          const standardItems = appliedStandards.map(
            ({ code, title }, index) => (index === 0 ? `${code}` : `, ${code}`)
          )

          return (
            <Grid item key={index} xs={12}>
              <List>
                <Card>
                  <ListItem divider button>
                    <Avatar className="avatar">{inspectionNumber}</Avatar>
                    <ListItemText
                      primary={`${name}, ${suburb}`}
                      secondary={client}
                    />
                    <ListItemSecondaryAction className="secondary-actions">
                      {/* <Chip
                        label={
                          reportTypes[index % 3].substring(0, 4) + '...'
                        }
                        className={`chip ${reportTypes[
                          index % 3
                        ].toLowerCase()}`}
                      /> */}
                      <CheckCircleIcon
                        style={{
                          visibility: completed ? '' : 'hidden',
                        }}
                        color="primary"
                        className="icon"
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <img src={image} alt="cover" />
                  <CardContent className="card-content">
                    <StyledNavLink
                      to={{
                        pathname: `${match.url}/edit`,
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
    <Typography variant="title" align="center">
      Try adding an inspection to get started!
    </Typography>
  )
}
