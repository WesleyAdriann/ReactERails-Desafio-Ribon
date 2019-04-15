import React, {Component} from 'react'

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
    }


    render () {
        return (
            <div className="col">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col">
                            <input type="text" className="form-control"/>
                        </div>
                        <label className="col-sm-2 col-form-label">ID Evolution</label>
                        <div className="col">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Pic URL</label>
                        <div className="col">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Type</label>
                        <div className="col">
                            <Select/>
                        </div>
                        <div className="col">
                            <Select/>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>

        )
    }
}

export default FormAdd;