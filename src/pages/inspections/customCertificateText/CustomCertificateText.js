import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { CertificateTextForm } from '../../../components/certificateTextForm/CertificateTextForm'
import { contextTypesTitleLeftRightNavUnsubscriber } from '../../../constants/'
import {
  showContentWhenLoaded,
  onComponentWillUnmountWithTitleLeftRightNav,
  replaceCertificateTextPlaceholders,
  closeMenu,
} from '../../../functions/'
import { state } from './state'
import { onComponentDidMount, revertToDefaultText, submit } from './functions/'

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
      customInspectionNumber,
      defaultCertificateText,
      client,
      name,
    } = this.props

    const { menuAnchor, revertText } = this.state

    const defaultText = replaceCertificateTextPlaceholders(
      defaultCertificateText,
      client,
      name
    )

    return showContentWhenLoaded(
      inspectionLoaded,
      <div>
        <CertificateTextForm
          showInspectionNumber
          initialData={{
            text: revertText
              ? defaultText
              : customCertificateText || defaultText,
            customInspectionNumber,
          }}
          onSubmit={submit(this)}
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
