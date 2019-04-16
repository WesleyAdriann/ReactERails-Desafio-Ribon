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
    }

    handleChange(e) {
        const {value, name} = e.target;
        this.setState({
          [name] : value
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
                    alert("Adicionado");
                } else {
                    alert("Não foi possivel adicionar");
                }
            })
            
        }
    }

    render () {
        return (
            <div className="col">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nome</label>
                        <div className="col">
                            <input name="nome" type="text" className="form-control" onChange={e => this.handleChange(e)}/>
                        </div>
                        <label className="col-sm-2 col-form-label">ID Evolução</label>
                        <div className="col">
                            <input name="evochain" type="number" min="0" className="form-control" onChange={e => this.handleChange(e)}/>
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
                            <Select name={'tipo0'} handleChange={this.handleChange} defaultValue={""}/>
                        </div>
                        <div className="col">
                            <Select name={'tipo1'} handleChange={this.handleChange} defaultValue={""}/>
                        </div>
                    </div>
                    
                        <button type="submit" className="btn btn-primary mb-2">Salvar</button> &nbsp;
                        <button type="reset" className="btn btn-primary mb-2">Limpar</button> 
                </form>
            </div>

        )
    }
}

export default FormAdd;