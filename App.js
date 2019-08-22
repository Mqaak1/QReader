import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/scenes/Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App = () => (<Provider store={store}><Router /></Provider>);

export default App;