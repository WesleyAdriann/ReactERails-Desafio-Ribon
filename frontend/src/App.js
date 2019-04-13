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

  
  componentDidMount() {
    axios.get('http://localhost:3001/pokemons')
      .then(resp => {
        this.setState({
          pokemons : resp.data,
          search: ''
        })
      })
  }
  
  handleChange(e) {
    console.log(e.target.value)
    // this.setState({
    //   [e.target.name] : e.target.value
    // });
  }
  
  render() {
    return (
      <div>
        <Navbar handleChange={this.handleChange}/>
        <div className="container pt-5 mt-5 ">
          <div className="row justify-content-center">
            {this.state.pokemons.map(poke => {
              console.log(poke)
              return(
                <Pokemon id={poke.id} nome={poke.nome} imagem={poke.imagem} tipo0={poke.tipo0} tipo1={poke.tipo1}/>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
