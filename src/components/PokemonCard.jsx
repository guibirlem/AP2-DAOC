import React, { useState, useEffect } from 'react';

function PokemonCard({ pokemon, onClick }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do Pokémon:', error);
        setLoading(false);
      });
  }, [pokemon.url]);

  if (loading) {
    return (
      <div className="border rounded-lg p-4 shadow-md animate-pulse">
        <div className="h-24 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
      </div>
    );
  }

  return (
    <div 
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-white"
      onClick={() => onClick(pokemonData)}
    >
      <img 
        src={pokemonData.sprites.front_default} 
        alt={pokemon.name} 
        className="w-24 h-24 mx-auto"
      />
      <h2 className="text-center text-lg capitalize font-medium mt-2">{pokemon.name}</h2>
      <div className="flex justify-center gap-2 mt-2">
        {pokemonData.types.map((type, index) => (
          <span 
            key={index} 
            className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
