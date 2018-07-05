import React from 'react'
import { DefaultModeRightComponent } from '../DefaultModeRightComponent'

export const setRightNav = (component, view) => {
  const { openSearchBar, toggleView } = component.props
  const { setRightNavComponent } = component.context

  setRightNavComponent(
    <DefaultModeRightComponent
      view={view}
      openSearchBar={openSearchBar}
      toggleView={toggleView}
    />
  )
}
