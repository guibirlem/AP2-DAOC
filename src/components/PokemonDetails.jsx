import React from 'react';

function PokemonDetails({ pokemon, onClose }) {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
          >
            &times;
          </button>
        </div>
        
        <div className="flex justify-center mb-4">
          <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            className="w-32 h-32"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <h3 className="font-medium">Tipo</h3>
            <div className="flex gap-1 flex-wrap">
              {pokemon.types.map((type, index) => (
                <span key={index} className="px-2 py-1 text-xs rounded-full bg-gray-200">
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium">Habilidades</h3>
            <ul>
              {pokemon.abilities.map((ability, index) => (
                <li key={index} className="text-sm capitalize">{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Altura</h3>
            <p>{pokemon.height / 10} m</p>
          </div>
          <div>
            <h3 className="font-medium">Peso</h3>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
        
        <h3 className="font-medium mt-4">Estatísticas</h3>
        <div className="space-y-2">
          {pokemon.stats.map((stat, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm">
                <span className="capitalize">{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${Math.min(100, stat.base_stat / 2)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
