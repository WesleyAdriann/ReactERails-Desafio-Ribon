import React, {Component} from 'react'
import axios from 'axios'

import Select from './Select'

class FormAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            imagem: '',
            evochain: '',
            tipo0: '',
            tipo1: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(e) {
        const {value, name} = e.target;
        this.setState({
          [name] : value
        })
    }

    handleReset() {
        this.setState({
            id: '',
            nome: '',
            imagem: '',
            evochain: '',
            tipo0: '',
            tipo1: '',
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.nome === '') {
            alert("Insira um nome");
        } else if (this.state.evochain === '') {
            alert("Insira uma ID de evolução");
        } else if (this.state.imagem === '') {
            alert("Insira um URL de imagem");
        } else if (this.state.tipo0 === '' && this.state.tipo1 === '') {
            alert("Seleciona pelo menos 1 tipo")
        } else { 
            axios({
                method: 'post',
                url: 'http://localhost:3001/pokemons',
                data : {
                    "nome" : this.state.nome,
                    "imagem" : this.state.imagem,
                    "evochain" : parseInt(this.state.evochain),
                    "tipo0" : this.state.tipo0,
                    "tipo1" : this.state.tipo1
                }
            }).then (response => {
                if(response.status === 201) {
                    alert("Adicionado com sucesso");
                    window.location.reload();
                } else {
                    alert("Não foi possivel adicionar");
                }
            })
            
        }
    }
    render () {
        let values = '';
        let last;
        return (
            <div className="col">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nome</label>
                        <div className="col">
                            <input name="nome" type="text" className="form-control" onChange={e => this.handleChange(e)}/>
                        </div>
                        <label className="col-sm-2 col-form-label">Id Evolução</label>
                        <div className="col">
                            {/* <input name="evochain" type="number" min="0" className="form-control" onChange={e => this.handleChange(e)}/> */}
                            <select name="evochain" className="custom-select" value={this.state.evochain} onChange={e => this.handleChange(e)}>  
                                <option disabled/>
                                {this.props.pokemons.map(poke => {
                                    last = poke.evochain
                                    if(!values.includes(poke.evochain)) {
                                        values = [values, poke.evochain]
                                        return ( [
                                        <option value={poke.evochain}>{poke.evochain}</option>,
                                        <option className="text-capitalize" disabled> - {poke.nome}</option> ]
                                        )
                                    } else {      
                                        return <option className="text-capitalize" disabled> - {poke.nome}</option>
                                    }   
                                })}
                                <option value={parseInt(last) + 1}>Novo</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Imagem URL</label>
                        <div className="col">
                            <input name="imagem" type="text" className="form-control" onChange={e => this.handleChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Tipo</label>
                        <div className="col">
                            <Select name={'tipo0'} handleChange={this.handleChange} defaultValue={this.state.tipo0}/>
                        </div>
                        <div className="col">
                            <Select name={'tipo1'} handleChange={this.handleChange} defaultValue={this.state.tipo1}/>
                        </div>
                    </div>
                    
                        <button type="submit" className="btn btn-primary mb-2">Salvar</button> &nbsp;
                        <button type="reset" className="btn btn-primary mb-2" onClick={this.handleReset}>Limpar</button> 
                </form>
            </div>

        )
    }
}

export default FormAdd;