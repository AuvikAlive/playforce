import React, { Component } from 'react'
import { CertificateTextForm } from '../../../components/certificateTextForm/CertificateTextForm'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'

export class DefaultCertificateText extends Component {
  componentDidMount() {
    const title = 'Default Certificate Text'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { defaultCertificateText, updateProfile } = this.props

    return (
      <CertificateTextForm
        initialData={defaultCertificateText}
        onSubmit={value => updateProfile({ defaultCertificateText: value })}
      />
    )
  }
}

DefaultCertificateText.contextTypes = contextTypesTitleLeftNav
