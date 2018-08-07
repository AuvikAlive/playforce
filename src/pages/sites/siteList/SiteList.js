import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { isEmpty } from 'react-redux-firebase'
import { AddButton } from '../../../components/addButton/AddButton'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import {
  onComponentWillUnmountTitleSearchRightNav,
  setSelectedItems,
  closeMenu,
  showContentWhenLoaded,
} from '../../../functions'
import { ListView } from './ListView'
import { GridView } from './GridView'
import { MapView } from './MapView'
import { StyledSiteList } from './StyledSiteList'
import { contextTypes } from './contextTypes'
import {
  onComponentDidMount,
  changeView,
  onSelectClick,
  setSelectMode,
} from './functions/'

export class SiteList extends Component {
  state = {
    menuAnchor: null,
    selectedItems: [],
    selectMode: false,
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountTitleSearchRightNav(this)
  }

  // componentWillReceiveProps({ view }) {
  //   view !== this.props.view && this.setRightNav(view)
  // }

  render() {
    const {
      match,
      searchBarOpen,
      searchResults,
      sitesLoaded,
      sites,
      view,
    } = this.props

    const { menuAnchor, selectedItems, selectMode } = this.state

    const sitesToShow =
      searchBarOpen && searchResults.length > 0 ? searchResults : sites

    const pulse = !searchBarOpen && isEmpty(sites)

    return showContentWhenLoaded(
      sitesLoaded,
      <StyledSiteList
        className={`StyledSiteList ${view !== 'list' && 'full-width'}`}
      >
        <AddButton to={`${match.url}/add`} pulse={pulse} />

        {(() => {
          switch (view) {
            case 'list':
              return (
                <SelectableList
                  sites={sitesToShow}
                  selectedItems={selectedItems}
                  selectMode={selectMode}
                  setSelectedItems={setSelectedItems(this)}
                  setSelectMode={setSelectMode(this)}
                  handleClick={onSelectClick(this)}
                  ListView={ListView}
                />
              )

            case 'grid':
              return <GridView sites={sitesToShow} />

            case 'map':
              return <MapView sites={sitesToShow} />

            default:
              return null
          }
        })()}

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu(this)}
          MenuListProps={{ disablePadding: true }}
        >
          {view !== 'grid' && (
            <MenuItem onClick={changeView(this, 'grid')}>Show as Grid</MenuItem>
          )}

          {view !== 'list' && (
            <MenuItem onClick={changeView(this, 'list')}>Show as List</MenuItem>
          )}

          {view !== 'map' && (
            <MenuItem onClick={changeView(this, 'map')}>Show as Map</MenuItem>
          )}
        </Menu>
      </StyledSiteList>
    )
  }
}

SiteList.contextTypes = contextTypes
