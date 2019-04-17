import React from 'react';

const ModalPokes = props => {
    return (
        <div align="center" className="col ">
            <h5 className="h5 text-capitalize">{props.nome}</h5> 
            <img src={props.imagem} alt={props.nome}/><br/>
            <span className={`badge badge-${props.tipo0} text-capitalize`}>{props.tipo0}</span><br/>
            <span className={`badge badge-${props.tipo1} text-capitalize`}>{props.tipo1}</span>
        </div>
    )
}

export default ModalPokes