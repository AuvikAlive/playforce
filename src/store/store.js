import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
// import { persistStore } from 'redux-persist'
import firebase from 'firebase'
import 'firebase/firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'
import { rootReducer } from './reducers/rootReducer'
import { firebaseConfig } from '../config/firebase'

export const history = createHistory()
const router = routerMiddleware(history)

firebase.initializeApp(firebaseConfig)
firebase.firestore().enablePersistence()

const firebaseStore = reactReduxFirebase(firebase, {
  userProfile: 'users',
  useFirestoreForProfile: true,
  // profileFactory: (userData, profileData) => profileData,
})

const fireStore = reduxFirestore(firebase)
const middleware = applyMiddleware(thunk.withExtraArgument(getFirebase), router)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export let store = createStore(
  // persistedReducer,
  rootReducer,
  composeEnhancers(firebaseStore, fireStore, middleware)
)

// export let persistor = persistStore(store)
