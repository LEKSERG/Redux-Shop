// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// Application dependencies
import './index.css';
import App from './App';

// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

// Redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const centralStore = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ));

ReactDOM.render(
  <Provider store={centralStore}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
