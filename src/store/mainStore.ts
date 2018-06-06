import rootReducer from 'Reducers/index'
import { applyMiddleware, Store, createStore, compose, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { IAppState } from 'Store/AppState.interface'
import defaultState from 'Store/defaultState'

//
// ─── REDUX DEV TOOLS ────────────────────────────────────────────────────────────
//

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//
// ─── ADD MIDDLEWARE ─────────────────────────────────────────────────────────────
//

const middleWares: Middleware[] = []
// push any middle wares
middleWares.push(thunk)

//
// ─── CREATE THE STORE ───────────────────────────────────────────────────────────
//

const mainStore: Store<IAppState> = createStore<IAppState>(
  rootReducer,
  defaultState,
  composer(applyMiddleware(...middleWares))
)

// ───────────────────────────────────────────────────────────────────────────────

export default mainStore
