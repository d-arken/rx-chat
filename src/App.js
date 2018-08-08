import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatApp from './components/ChatApp'
import chat from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addUser } from './actions/chat'

const store = createStore(chat)

store.dispatch(addUser('Me'))

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
