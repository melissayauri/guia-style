import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@shopify/polaris/styles.css';
import {Page, Card, Button} from '@shopify/polaris';
import { Boton as LaboratoriaBoton } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LaboratoriaBoton label="hola"></LaboratoriaBoton>
        <Page title="Example app">
          <Card sectioned>
            <Button onClick={() => alert('Button clicked!')}>Example button</Button>
          </Card>
        </Page>
      </div>
    );
  }
}

export default App;
