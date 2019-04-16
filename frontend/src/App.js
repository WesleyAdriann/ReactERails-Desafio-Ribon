import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';
import FormAdd from './components/FormAdd';
import FormEdit from './components/FormEdit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      pokemons : [],
      evoChain : '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChain = this.handleChain.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/pokemons')
      .then(resp => {
        console.log(resp);
        this.setState({
          pokemons : resp.data,
        })
      })
  }
  
  handleChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name] : value
    })
  }

  handleChain(evoChain) {
    this.setState({ evoChain })
  }

  clearFilters() {
    this.setState({
      evoChain : '',
      search : ''
    })
  }

  handleDelete(e) {

  }

  render() {
    let count = 0;
    let Limpa = ''
    if(this.state.evoChain !== '') {
      Limpa = (<button className="btn btn-primary mt-2" onClick={this.clearFilters}>Voltar</button>)
    }
    return (
      <div>
        <Navbar handleChange={this.handleChange} search={this.state.search}/>
        <div className="container pt-5 mt-4 ">
          <div className="row justify-content-center m-2">
            <div  align="center" className="col">
              <h5 className="h5">
                <a data-toggle="collapse" href="#addForm">Adicionar</a>&nbsp;/&nbsp;
                <a data-toggle="collapse" href="#editForm">Editar</a>
              </h5>
              <div className="collapse" id="addForm">
              <FormAdd addPokemon={this.addPokemon}/>
              </div>
              <div className="collapse" id="editForm">
              <FormEdit maxPoke={this.state.pokemons.length}/>
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
                        handleDelete={this.handleDelete}
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
                        handleDelete={this.handleDelete}
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
