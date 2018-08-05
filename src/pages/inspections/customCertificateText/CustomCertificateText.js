import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { CertificateTextForm } from '../../../components/certificateTextForm/CertificateTextForm'
import { contextTypesTitleLeftRightNavUnsubscriber } from '../../../constants/'
import {
  showContentWhenLoaded,
  onComponentWillUnmountWithTitleLeftRightNav,
  replaceLongDate,
  closeMenu,
} from '../../../functions/'
import { state } from './state'
import { onComponentDidMount, revertToDefaultText } from './functions/'

export class CustomCertificateText extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const {
      inspectionLoaded,
      customCertificateText,
      defaultCertificateText,
      saveCustomCertificateText,
      userId,
      inspectionId,
    } = this.props

    const { menuAnchor, revertText } = this.state
    const defaultText = replaceLongDate(defaultCertificateText)

    return showContentWhenLoaded(
      inspectionLoaded,
      <div>
        <CertificateTextForm
          initialData={
            revertText ? defaultText : customCertificateText || defaultText
          }
          onSubmit={value =>
            saveCustomCertificateText(userId, inspectionId, value)
          }
        />

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu(this)}
          MenuListProps={{ disablePadding: true }}
        >
          <MenuItem onClick={revertToDefaultText(this)}>
            Revert to Default Text
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

CustomCertificateText.contextTypes = contextTypesTitleLeftRightNavUnsubscriber