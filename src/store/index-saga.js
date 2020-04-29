import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import creactSagaMiddleWare from 'redux-saga';
import mySages from './sagas'

const sagaMiddleware = creactSagaMiddleWare()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(mySages)

export default store