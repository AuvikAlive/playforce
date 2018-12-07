import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Loadable from "../../../components/loadable/LoadableLinear"
import { NavContext } from "components/NavContextProvider/"
import { showContentWhenLoaded } from "../../../functions/"
import EditInspection from "../editInspection/"
import { onComponentDidMount } from "./onComponentDidMount"

const EditCover = Loadable({
  loader: () => import("../editCover"),
})

const AuditSummary = Loadable({
  loader: () => import("../auditSummary"),
})

const ConditionRatingRoutes = Loadable({
  loader: () => import("../conditionRatingRoutes"),
})

const ComplianceIssueRoutes = Loadable({
  loader: () => import("../complianceIssueRoutes"),
})

const MaintenanceIssueRoutes = Loadable({
  loader: () => import("../maintenanceIssueRoutes"),
})

const ImpactTestRoutes = Loadable({
  loader: () => import("../impactTestRoutes"),
})

const CustomCertificateText = Loadable({
  loader: () => import("../customCertificateText"),
})

const Notes = Loadable({
  loader: () => import("../notes"),
})

const PlayingSurfaceRoutes = Loadable({
  loader: () => import("../playingSurfaceRoutes"),
})

const PlaygroundRoutes = Loadable({
  loader: () => import("../playgroundRoutes"),
})

// EditCover.preload()
// AuditSummary.preload()
// ConditionRatingRoutes.preload()
// ComplianceIssueRoutes.preload()
// MaintenanceIssueRoutes.preload()
// ImpactTestRoutes.preload()
// CustomCertificateText.preload()
// Notes.preload()
// PlayingSurfaceRoutes.preload()
// PlaygroundRoutes.preload()

export class EditInspectionRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    this.props.discardInspection()
  }

  render() {
    const {
      match,
      inspectionLoaded,
      standardsLoaded,
      reportNotesLoaded,
    } = this.props

    const isLoaded = inspectionLoaded && standardsLoaded && reportNotesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route path={`${match.url}/cover`} component={EditCover} />

        <Route path={`${match.url}/auditSummary`} component={AuditSummary} />

        <Route
          path={`${match.url}/conditionRating`}
          component={ConditionRatingRoutes}
        />

        <Route
          path={`${match.url}/complianceIssues`}
          component={ComplianceIssueRoutes}
        />

        <Route
          path={`${match.url}/maintenanceIssues`}
          component={MaintenanceIssueRoutes}
        />

        <Route path={`${match.url}/impactTest`} component={ImpactTestRoutes} />

        <Route
          path={`${match.url}/certificateText`}
          component={CustomCertificateText}
        />

        <Route path={`${match.url}/notes`} component={Notes} />

        <Route
          path={`${match.url}/playingSurfaces`}
          component={PlayingSurfaceRoutes}
        />

        <Route path={`${match.url}/playgrounds`} component={PlaygroundRoutes} />

        <Route path={`${match.url}`} component={EditInspection} />
      </Switch>
    )
  }
}

EditInspectionRoutes.contextType = NavContext
