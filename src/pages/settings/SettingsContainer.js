import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Settings } from './Settings'

export const SettingsContainer = compose(withFirestore, connect(null))(Settings)
