import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import curriculum from '../application/reducer'
import { history } from './history'

const rootReducer = combineReducers({
  cv: curriculum,
  router: connectRouter(history),
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialState = {}

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware, routerMiddleware(history))),
)

export const persistor = persistStore(store)
