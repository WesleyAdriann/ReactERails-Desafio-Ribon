import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      pokemons : []
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

  
  componentDidMount() {
    axios.get('http://localhost:3001/pokemons')
      .then(resp => {
        this.setState({
          pokemons : resp.data,
        })
      })
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  render() {
    let count = 0;
    return (
      <div>
        <Navbar handleChange={this.handleChange}/>
        <div className="container pt-5 mt-5 ">
          <div className="row justify-content-center">
            {this.state.pokemons.map(poke => {
              if((this.state.search === '') ||
                (poke.nome.includes(this.state.search.toLocaleLowerCase()))) {
                  return(
                    <Pokemon id={poke.id} nome={poke.nome} imagem={poke.imagem} tipo0={poke.tipo0} tipo1={poke.tipo1}/>
                  )
              } else {
                count++;
                console.log(count)
              }
              if(count === 151) {
                return (
                  <div align="center" className="col mt-5" key={count}>
                    <p className="h1">No results to show </p>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
