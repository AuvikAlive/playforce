import React from 'react'
import Typography from 'material-ui/Typography'
import CheckCircleIcon from 'material-ui-icons/CheckCircle'
import Paper from 'material-ui/Paper'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export const ListView = ({ inspections, match }) => {
  return inspections.length > 0 ? (
    <Paper className="paper">
      <List component="nav" disablePadding>
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
            const { location, client } = cover
            const { name, suburb } = location
            // const reportTypes = [
            //   'Comprehensive',
            //   'Operational',
            //   'Routine',
            // ]
            const completed =
              coverAdded && auditSummaryAdded && conditionRatingsAdded

            return cover ? (
              <StyledNavLink
                key={id}
                to={{
                  pathname: `${match.url}/edit`,
                  state: {
                    id,
                  },
                }}
              >
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
              </StyledNavLink>
            ) : null
          }
        )}
      </List>
    </Paper>
  ) : (
    <Typography variant="title" align="center">
      Try adding an inspection to get started!
    </Typography>
  )
}
