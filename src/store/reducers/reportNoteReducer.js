import {
  FETCH_REPORT_NOTES,
  FETCH_REPORT_NOTES_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  reportNotesLoaded: false,
  reportNotes: [],
}

export const reportNoteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REPORT_NOTES:
      return { ...state, reportNotesLoaded: false }

    case FETCH_REPORT_NOTES_COMPLETED:
      return { ...state, reportNotesLoaded: true, reportNotes: payload }

    default:
      return state
  }
}
