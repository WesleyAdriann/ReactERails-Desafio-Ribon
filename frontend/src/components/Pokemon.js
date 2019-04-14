import React from 'react';
import '../css/pokemon.min.css'

const Pokemon = props => {
    let tipo1;
    if (props.tipo1 != '') {
        tipo1 = <span className={`badge badge-${props.tipo1}`}>{props.tipo1}</span>
    }
    return (
        <div className="col-sm-3 m-1 p-1 border rounded" key={props.id}>
            <div className="media" >
                <img 
                    className="mr-3"
                    src={props.imagem}
                    alt={props.nome}
                    onClick={() => {props.handleChain(props.evochain)}}
                />
                <div className="media-body" onClick={() => {props.handleChain(props.evochain)}}>
                    <h5 className="mt-0">{props.nome}</h5>
                    PokeID: {props.id}<br/>
                    <h6>   
                        <span className={`badge badge-${props.tipo0}`}>{props.tipo0}</span> &nbsp;
                        {tipo1} &nbsp;
                    </h6>
                </div>
                <span className="badge pt-0 pr-1 badge-danger" style={{verticalAlign: 'text-top'}}>×</span>                   
            </div>
            
            

        </div>
    )
}

export default Pokemon;