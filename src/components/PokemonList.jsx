import React from 'react';
import PokemonCard from './PokemonCard';
import LoadingSpinner from './LoadingSpinner';

function PokemonList({ pokemons, loading, onSelectPokemon }) {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!pokemons || pokemons.length === 0) {
    return <p className="text-center text-gray-500">Nenhum Pokémon encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map(pokemon => (
        <PokemonCard 
          key={pokemon.name} 
          pokemon={pokemon} 
          onClick={onSelectPokemon} 
        />
      ))}
    </div>
  );
}

export default PokemonList;
//* --- IGNORAR --- */