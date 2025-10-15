const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Falha ao buscar lista de Pokémons');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar Pokémons:', error);
    throw error;
  }
};

export const fetchPokemonDetails = async (idOrName) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon/${idOrName}`);
    if (!response.ok) {
      throw new Error(`Falha ao buscar detalhes do Pokémon: ${idOrName}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Erro ao buscar Pokémon ${idOrName}:`, error);
    throw error;
  }
};
