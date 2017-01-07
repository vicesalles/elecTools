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
          <footer>
            <a id="me" href="http://vicesalles.me" target="_blank">Vice Sallés | front-end storyteller | training projects</a>
          </footer>
        </section>
      </main>
    );
  }
}

export default App;
