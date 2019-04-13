import React from 'react';

const Pokemon = props => {
    return (
        <div className="col-sm-3 m-1 p-1 border rounded" key={props.id}>
            <div className="media">
                <img className="mr-3" src={props.imagem} alt={props.nome}/>
                <div className="media-body">
                    <h5 className="mt-0">{props.nome}</h5>
                    PokeID: {props.id}<br/>
                    <h6>{props.tipo1} - {props.tipo0}</h6>
                </div>
                <span className="badge pt-0 pr-1 badge-danger" style={{verticalAlign: 'text-top'}}>×</span>                   
            </div>
            
            

        </div>
    )
}

export default Pokemon;