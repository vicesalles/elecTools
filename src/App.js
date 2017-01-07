import React, { Component } from 'react';
import './App.css';
import Ohm from './Ohm';
import GitHub from './GitHub';

class App extends Component {

  render() {
    return (
      <main>
        <section>
          <h1>Ohm's Law</h1>
          <Ohm />
          <footer>
            <a id="me" href="http://vicesalles.me" target="_blank">Vice Sallés | front-end storyteller | training projects</a>
            <GitHub prj="elecTools"/>
          </footer>
        </section>
      </main>
    );
  }
}

export default App;
