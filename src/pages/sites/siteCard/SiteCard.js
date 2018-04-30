import React from 'react'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/Edit'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Chip from 'material-ui/Chip'
import { Map } from '../Map'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledSiteCard } from './StyledSiteCard'

export const SiteCard = ({
  site,
  showHeader,
  curtailAddress,
  hideDivision,
}) => {
  const {
    name,
    id,
    latitude,
    longitude,
    street,
    suburb,
    state,
    postcode,
    country,
    division,
    operator,
    inspections,
  } = site

  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`
  const chips =
    inspections &&
    inspections.map(({ type }) => (
      <Chip
        style={{ marginTop: 8, marginRight: 8 }}
        component="span"
        label={type}
        key={type}
      />
    ))
  return (
    <StyledSiteCard className="StyledSiteCard">
      <Card>
        {showHeader && <CardHeader title={name} />}
        <Map lat={latitude} lng={longitude} />
        <CardContent className="card-content">
          <StyledNavLink to={`/sites/${id}/edit/general`} className="edit-icon">
            <Button variant="fab" color="primary" aria-label="edit inspection">
              <EditIcon />
            </Button>
          </StyledNavLink>
          <List>
            <ListItem divider>
              <ListItemText
                primary="Address"
                secondary={
                  <span
                    className={`${curtailAddress ? 'curtailed-address' : ''}`}
                  >
                    {address}
                  </span>
                }
              />
            </ListItem>
            <ListItem divider>
              <ListItemText primary="Operator" secondary={operator} />
            </ListItem>
            {!!division &&
              !hideDivision && (
                <ListItem divider>
                  <ListItemText primary="Division" secondary={division} />
                </ListItem>
              )}
            {chips && (
              <ListItem>
                <ListItemText primary="Inspection Types" secondary={chips} />
              </ListItem>
            )}
          </List>
        </CardContent>
      </Card>
    </StyledSiteCard>
  )
}
