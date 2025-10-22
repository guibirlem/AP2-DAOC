import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList';
import SearchForm from '../components/SearchForm';
import PokemonDetails from '../components/PokemonDetails';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchPokemons } from '../services/api';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPokemons() {
      try {
        setLoading(true);
        const data = await fetchPokemons(150, 0);
        setPokemons(data.results);
        setFilteredPokemons(data.results);
      } catch (error) {
        setError('Falha ao carregar Pokémons. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    loadPokemons();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredPokemons(pokemons);
      return;
    }
    
    const filtered = pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredPokemons(filtered);
  };

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleClosePokemonDetails = () => {
    setSelectedPokemon(null);
  };

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Catálogo de Pokémon</h1>
      
      <SearchForm onSearch={handleSearch} />
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        <PokemonList 
          pokemons={filteredPokemons} 
          loading={loading} 
          onSelectPokemon={handleSelectPokemon} 
        />
      )}
      
      {selectedPokemon && (
        <PokemonDetails 
          pokemon={selectedPokemon} 
          onClose={handleClosePokemonDetails} 
        />
      )}
    </div>
  );
}
//* --- IGNORAR --- */
export default Home;
