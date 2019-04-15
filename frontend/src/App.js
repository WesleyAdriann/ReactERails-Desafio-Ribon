import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      pokemons : [],
      evoChain : '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChain = this.handleChain.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
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

  handleChain(evoChain) {
    this.setState({ evoChain })
  }

  clearFilters() {
    this.setState({
      evoChain : ''
    })
  }
  
  render() {
    let count = 0;
    let Limpa = ''
    if(this.state.evoChain !== '') {
      Limpa = (<button className="btn btn-primary" onClick={this.clearFilters}>Voltar</button>)
    }
    return (
      <div>
        <Navbar handleChange={this.handleChange}/>
        <div className="container pt-5 mt-4 ">
          <div className="row justify-content-center m-2">
            <div  align="center" className="col">
              <h5 className="h5">
                <a data-toggle="collapse" href="#addForm">Add</a>&nbsp;&nbsp;
                <a data-toggle="collapse" href="#editForm">Edit</a>
              </h5>
              <div className="collapse" id="addForm">
              aDD
              </div>
              <div className="collapse" id="editForm">
              Edit
              </div>
              {Limpa}
            </div>
            </div>
          <div className="row justify-content-center">
            
            {this.state.pokemons.map(poke => {
              if(this.state.evoChain === '') {
                if((this.state.search === '') ||
                  (poke.nome.includes(this.state.search.toLocaleLowerCase()))) {
                  
                    return(
                      <Pokemon
                        id={poke.id}
                        nome={poke.nome}
                        imagem={poke.imagem}
                        evochain={poke.evochain}
                        tipo0={poke.tipo0}
                        tipo1={poke.tipo1}
                        handleChain={this.handleChain}
                      />
                    )
                } else {
                  count++;
                  
                }
                if(count === 151) {
                  return (
                    <div align="center" className="col mt-5" key={count}>
                      <p className="h1">No results to show </p>
                    </div>
                  )
                }
              } else if(poke.evochain === this.state.evoChain) {
                if((this.state.search === '') ||
                  (poke.nome.includes(this.state.search.toLocaleLowerCase()))) {
                  
                    return(
                      <Pokemon
                        id={poke.id}
                        nome={poke.nome}
                        imagem={poke.imagem}
                        evochain={poke.evochain}
                        tipo0={poke.tipo0}
                        tipo1={poke.tipo1}
                        handleChain={this.handleChain}
                      />
                    )
                }
              }
              return ''
            })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
