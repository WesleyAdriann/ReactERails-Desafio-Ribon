import React from 'react';

const Pokemon = props => {
    return (
        <div className="col-md-3 pl-2 pr-2 border rounded">
            <div className="media">
                <img className="mr-3" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"/>
                <div className="media-body">
                    <h5 class="mt-0">Nome</h5>
                    PokeID:<br/>
                    Tipo(s):
                </div>
                
                <h6 class="ml-1">x</h6>
            </div>
            
            

        </div>
    )
}

export default Pokemon;