import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Loadable from "../../../components/loadable/LoadableLinear"
import { NavContext } from "components/NavContextProvider/"
import { showContentWhenLoaded } from "../../../functions/"
import { ReportNotesList } from "../reportNotesList/ReportNotesList"
import { onComponentDidMount } from "./onComponentDidMount"

const AddReportNote = Loadable({
  loader: () => import("../addReportNote"),
})

const EditReportNote = Loadable({
  loader: () => import("../editReportNote"),
})

AddReportNote.preload()
EditReportNote.preload()

export class ReportNoteRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { reportNotesLoaded, reportNotes, match } = this.props

    return showContentWhenLoaded(
      reportNotesLoaded,
      <Switch>
        <Route path={`${match.url}/edit/:id`} component={EditReportNote} />

        <Route path={`${match.url}/add`} component={AddReportNote} />

        <Route
          path={match.url}
          render={routerProps => (
            <ReportNotesList {...{ reportNotes }} {...routerProps} />
          )}
        />
      </Switch>
    )
  }
}

ReportNoteRoutes.contextType = NavContext
