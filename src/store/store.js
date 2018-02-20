import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import firebase from 'firebase'
import { reactReduxFirebase } from 'react-redux-firebase'
import { rootReducer } from './reducers/reducers'
import { firebaseConfig } from '../config/firebase'

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage
  },
  rootReducer
)

export const history = createHistory()
const router = routerMiddleware(history)

firebase.initializeApp(firebaseConfig)
const firebaseStore = reactReduxFirebase(firebase, {
  userProfile: 'users'
})

const middleware = applyMiddleware(thunk, router)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export let store = createStore(
  persistedReducer,
  composeEnhancers(firebaseStore, middleware)
)

export let persistor = persistStore(store)
