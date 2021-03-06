import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// import { withAuthenticator } from '@aws-amplify/ui-react'

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h>now have Auth! {user}</h>
        <button onClick={signOut}>Sign out</button>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
