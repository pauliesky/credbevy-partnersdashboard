import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../_redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);






















// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { authReducer } from '../_redux/reducers';

// const reducers = {
//   authReducer
// }

// const persistConfig = {
//   key: 'root',
//   storage,
//   stateReconciler: autoMergeLevel2,
// }

// const rootReducer = combineReducers(reducers);
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const configureStore = () => createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

// // export default store;