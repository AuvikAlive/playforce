import React from "react"
import Fab from "@material-ui/core/Fab"
import ModeEditIcon from "@material-ui/icons/Edit"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import CardContent from "@material-ui/core/CardContent"
import { format } from "date-fns"
import { StyledNavLink } from "../../../components/styledNavLink/StyledNavLink"
import { capitalize } from "../../../functions/"
import { StyledGridList } from "../StyledGridList"

export const ListView = ({ groupedConditionRatings, match, value }) => {
  const items = groupedConditionRatings[value]

  return (
    <StyledGridList className="StyledConditionRatingList">
      <Grid container>
        {items &&
          items.length > 0 &&
          items.map(
            (
              {
                id,
                image,
                itemType,
                equipment,
                assetId,
                manufacturer,
                condition,
                estimatedDateInstalled,
              },
              index
            ) => {
              return (
                <Grid item key={index} xs={12}>
                  {image && <img src={image} alt="equipment type" />}

                  <CardContent className="card-content">
                    <StyledNavLink
                      to={`${match.url}/edit/${id}`}
                      className="floating-icon"
                    >
                      <Fab color="primary" aria-label="edit compliance issue">
                        <ModeEditIcon />
                      </Fab>
                    </StyledNavLink>

                    <Typography variant="h6">Equipment: {equipment}</Typography>

                    {itemType && (
                      <Typography variant="subtitle1">
                        Item Type: {capitalize(itemType)}
                      </Typography>
                    )}

                    {assetId && (
                      <Typography variant="subtitle1">
                        Asset Id: {assetId}
                      </Typography>
                    )}

                    {manufacturer && (
                      <Typography variant="subtitle1">
                        Manufacturer: {manufacturer}
                      </Typography>
                    )}

                    <Typography variant="subtitle1">
                      Condition: {condition}
                    </Typography>

                    {estimatedDateInstalled && (
                      <Typography variant="subtitle1">
                        Estimated Date Installed:{" "}
                        {format(estimatedDateInstalled, "YYYY")}
                      </Typography>
                    )}
                  </CardContent>
                </Grid>
              )
            }
          )}
      </Grid>
    </StyledGridList>
  )
}
