import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';
import FormAdd from './components/FormAdd';
import FormEdit from './components/FormEdit';
import ModalPokes from './components/ModalPokes';

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
    let { id } = e.target;
    console.log(id);
    axios.delete(`http://localhost:3001/pokemons/${id}`)
      .then(response => {
        if(response.status === 204) {
          alert("Deletado com sucesso");
          window.location.reload();
        }
      })
  }

  render() {
    let count = 0;
    return (
      <div>
        <Navbar handleChange={this.handleChange} search={this.state.search}/>
        <div className="container pt-5 mt-4 ">
          <div className="row justify-content-center m-2">
            <div align="center" className="col">
              <h5 className="h5">
                <a data-toggle="collapse" style={{textDecoration: 'none'}} href="#addForm">Adicionar</a>&nbsp;/&nbsp;
                <a data-toggle="collapse" style={{textDecoration: 'none'}} href="#editForm">Editar</a>
              </h5>
              <div className="collapse" id="addForm">
              <FormAdd addPokemon={this.addPokemon}/>
              </div>
              <div className="collapse" id="editForm">
              <FormEdit maxPoke={this.state.pokemons.length}/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            
            {this.state.pokemons.map(poke => {
              
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
            return ''
            })
            }
          </div>
          

          <div className="modal" id="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title">
                    <h5 className="h5">Cadeia de Evolução</h5>
                    <h6 className="h6">ID : {this.state.evoChain}</h6>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      {this.state.pokemons.map(poke => {
                        if(poke.evochain === this.state.evoChain) {
                          return (
                            <ModalPokes
                              nome={poke.nome}
                              imagem={poke.imagem}
                              tipo0={poke.tipo0}
                              tipo1={poke.tipo1}
                            />
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
