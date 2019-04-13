import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons : []
    }
  }

  
  
  
  
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container pt-5 mt-5">
          <div className="row">
            <Pokemon/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
