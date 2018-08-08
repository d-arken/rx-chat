import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatApp from './components/ChatApp'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import handleNewMessage from './sagas'
import setupSocket from './sockets/socket'
import username from './usernames'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          This is the <code>web-chat</code> challenge.
        </p>

        <Provider store={store}>
          <ChatApp />
        </Provider>

      </div>
    );
  }
}

export default App;
