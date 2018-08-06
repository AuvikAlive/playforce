import React, { Component } from 'react'
import { CertificateTextForm } from '../../../components/certificateTextForm/CertificateTextForm'
import { Content } from '../../../components/content/Content'
import { AvailablePlaceholders } from '../../../components/availablePlaceholders/AvailablePlaceholders'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { placeholders } from './placeholders'

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
      <div>
        <CertificateTextForm
          initialData={defaultCertificateText}
          onSubmit={value => updateProfile({ defaultCertificateText: value })}
        />

        <Content>
          <AvailablePlaceholders placeholders={placeholders} />
        </Content>
      </div>
    )
  }
}

DefaultCertificateText.contextTypes = contextTypesTitleLeftNav
