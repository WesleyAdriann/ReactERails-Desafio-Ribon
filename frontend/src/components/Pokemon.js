import React from 'react';
import '../css/pokemon.min.css'

const Pokemon = props => {
    return (
        <div className="col-sm-3 m-1 p-1 border rounded" key={props.id}>
            <div className="media">
                <img 
                    className="mr-3"
                    src={props.imagem}
                    alt={props.nome}
                    onClick={() => {props.handleChain(props.evochain)}}
                    data-target="#modal" data-toggle="modal"
                />
                <div className="media-body" data-target="#modal" data-toggle="modal" onClick={() => {props.handleChain(props.evochain)}}>
                    <h5 className="mt-0 text-capitalize">{props.nome}</h5>
                    PokeID: {props.id}<br/>
                    <h6>   
                        <span className={`badge badge-${props.tipo0} text-capitalize`}>{props.tipo0}</span> &nbsp;
                        <span className={`badge badge-${props.tipo1} text-capitalize`}>{props.tipo1}</span>
                    </h6>
                </div>
                <span className="badge pt-0 pr-1 badge-danger" id={props.id} onClick={e => props.handleDelete(e)}>&times;</span>
                
            </div>
            
            

        </div>
    )
}

export default Pokemon;