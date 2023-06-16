import {Pokemon, PokemonWithProps} from "../types/pokemon.types";

export const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data.results;
};

export const buscarPokemons = async (pokemonName: string): Promise<Pokemon[]> => {
    const data = await getPokemons();
    return data.filter(pokemon => pokemon.name.toLowerCase().startsWith(pokemonName.toLowerCase()));
};

export const getPokemon = async (pokemonName: string | undefined): Promise<PokemonWithProps> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    return await response.json();
};