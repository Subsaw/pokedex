import React from 'react';
import { Link } from 'react-router-dom' 

function Card({ pokemon }) {
    return (
        <Link to={`pokemon/${pokemon.id}`}>
            <div class="card w-96 bg-base-100 shadow-xl mx-4 my-2">
                <figure>
                    <img 
                    alt="pokemon" 
                    src={pokemon.sprites.front_default}
                    class="w-32">
                </img></figure>
                <div class="card-body">
                    <h2 class="card-title capitalize">
                        {pokemon.name}
                    </h2>
                    <div class="card-actions justify-end">
                    {
                    pokemon.types.map(type => {
                        return (
                            <div class="badge badge-outline">{type.type.name}</div>
                        )
                    })
                }
                        
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;