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
    onComponentDidMountWithTitleLeftNav(this, 'Default Certificate Text')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { defaultCertificateText, updateProfile } = this.props

    return (
      <div>
        <CertificateTextForm
          initialData={{ text: defaultCertificateText }}
          onSubmit={({ text }) =>
            updateProfile({ defaultCertificateText: text })
          }
        />

        <Content>
          <AvailablePlaceholders placeholders={placeholders} />
        </Content>
      </div>
    )
  }
}

DefaultCertificateText.contextTypes = contextTypesTitleLeftNav
