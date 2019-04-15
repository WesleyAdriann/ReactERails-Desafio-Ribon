import React, { Component } from 'react';

class FormEdit extends Component {
    render() {
        return (
            <div className="col">
                <form>
                  <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Selecione o PokeID</label>
                            <div className="col">
                                <input name="evochain" type="number" min="0" className="form-control"/>
                            </div>
                            <div className="col-sm-1">
                                <button className="btn btn-primary">Abrir</button>
                            </div>
                  </div>  
                </form>
            </div>
        )
    }
}

export default FormEdit;