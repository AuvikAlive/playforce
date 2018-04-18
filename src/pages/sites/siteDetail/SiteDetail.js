import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import EditIcon from 'material-ui-icons/Edit'
import DirectionsIcon from 'material-ui-icons/Directions'
import Card, { CardContent } from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Chip from 'material-ui/Chip'
import Button from 'material-ui/Button'
import { LinearProgress } from 'material-ui/Progress'
import { StyledSiteDetail } from './StyledSiteDetail'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import Map from './Map'

export class SiteDetail extends Component {
  componentDidMount() {
    const { site, fetchSite, userId, siteId } = this.props

    site && this.setup(site)
    !site && fetchSite(userId, siteId)
  }

  componentWillReceiveProps(nextProps) {
    const { site } = nextProps
    if (site !== this.props.site) {
      this.setup(site)
    }
  }

  componentWillUnmount() {
    const {
      removeLefNavComponent,
      removeNavTitle,
      removeRightNavComponent,
    } = this.context

    removeLefNavComponent()
    removeNavTitle()
    removeRightNavComponent()
  }

  setup = site => {
    const { history, openModal } = this.props

    const {
      setLeftNavComponent,
      setRightNavComponent,
      setNavTitle,
    } = this.context

    const { name, street, suburb, state, postcode, country } = site
    const address = `${street}+${suburb}+${state}+${postcode}+${country}`
    const encodedAddress = encodeURI(address)

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )
    setNavTitle(name)
    setRightNavComponent(
      <div>
        <a
          target="_blank"
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <IconButton color="inherit" aria-label="Directions">
            <DirectionsIcon />
          </IconButton>
        </a>
        <IconButton
          color="inherit"
          aria-label="Search"
          onClick={() => openModal(this.delete)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    )
  }

  delete = async () => {
    const { deleteSite, userId, siteId, history } = this.props

    await deleteSite(userId, siteId)
    history.goBack()
  }

  render() {
    const { match, site } = this.props

    if (site) {
      const {
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

      const address = `${street} , ${suburb} ${state} ${postcode}, ${country}`
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
        <StyledSiteDetail className="StyledSiteDetail">
          <Card className="card">
            <StyledNavLink
              to={match.url + '/edit/general'}
              className="edit-icon"
            >
              <Button
                variant="fab"
                color="primary"
                aria-label="edit inspection"
              >
                <EditIcon />
              </Button>
            </StyledNavLink>
            <Map lat={latitude} lng={longitude} />
            <CardContent>
              <List>
                <ListItem divider>
                  <ListItemText primary="Address" secondary={address} />
                </ListItem>
                <ListItem divider>
                  <ListItemText primary="Operator" secondary={operator} />
                </ListItem>
                {division && (
                  <ListItem divider>
                    <ListItemText primary="Division" secondary={division} />
                  </ListItem>
                )}
                {chips && (
                  <ListItem>
                    <ListItemText
                      primary="Inspection Types"
                      secondary={chips}
                    />
                  </ListItem>
                )}
              </List>
            </CardContent>
          </Card>
        </StyledSiteDetail>
      )
    } else {
      return <LinearProgress />
    }
  }
}

SiteDetail.contextTypes = {
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
