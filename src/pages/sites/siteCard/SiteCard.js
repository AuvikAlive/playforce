import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Chip from '@material-ui/core/Chip'
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
      <Card className="card">
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
