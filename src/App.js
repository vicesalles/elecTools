import React, { Component } from 'react';
import './App.css';
import Ohm from './Ohm';

class App extends Component {

  render() {
    return (
      <main>
        <section>
          <h1>Ohm's Law</h1>
          <Ohm />
        </section>
      </main>
    );
  }
}

export default App;
