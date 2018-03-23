import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage'
import firebase from 'firebase'
import 'firebase/firestore'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'
import { rootReducer } from './rootReducer'
import { firebaseConfig } from '../config/firebase'

localForage.config({
  name: 'Playforce Inspector App',
  storeName: 'playforce',
})

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: localForage,
  },
  rootReducer,
)

export const history = createHistory()
const router = routerMiddleware(history)

firebase.initializeApp(firebaseConfig)
firebase.firestore().enablePersistence()
const firebaseStore = reactReduxFirebase(firebase, {
  userProfile: 'users',
  useFirestoreForProfile: true,
  profileFactory: (userData, profileData) => profileData,
})
const fireStore = reduxFirestore(firebase)

const middleware = applyMiddleware(thunk, router)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export let store = createStore(
  persistedReducer,
  composeEnhancers(firebaseStore, fireStore, middleware),
)

export let persistor = persistStore(store)
