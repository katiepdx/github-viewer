// the store that the reducer has access to 

// npm i redux and get createStore
import { createStore, applyMiddleware } from 'redux'
// import thunk middleware
import thunk from 'redux-thunk'
// import the reducer function from the reducer file
import reducer from './reducers/ghUserReducer';

const composeEnhancers =   // add following line for REDUX_DEVTOOLS (chrome extension)
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// createStore
export default createStore(
  reducer,
  // middleware to allow function actions
  composeEnhancers(applyMiddleware(thunk))
)
