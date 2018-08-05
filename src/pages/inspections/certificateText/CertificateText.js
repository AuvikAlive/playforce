import React, { Component } from 'react'
import { CertificateTextForm } from '../../../components/certificateTextForm/CertificateTextForm'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import { onComponentWillUnmountWithTitleLeftNav } from '../../../functions/'
import { onComponentDidMount } from './onComponentDidMount'

export class CertificateText extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const {
      customCertificateText,
      defaultCertificateText,
      saveCustomCertificateText,
      userId,
      inspectionId,
    } = this.props

    return (
      <CertificateTextForm
        initialData={customCertificateText || defaultCertificateText}
        onSubmit={value =>
          saveCustomCertificateText(userId, inspectionId, value)
        }
      />
    )
  }
}

CertificateText.contextTypes = contextTypesTitleLeftNavUnsubscriber
