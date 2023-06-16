/**
 * Represents a pokemon
 *
 * @author Digital House
 * @see https://pokeapi.co/api/v2/item-category
 */


export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonWithProps extends Pokemon{
    id: number;
    sprites: Sprite
}

export interface Sprite {
    "default": string;
    other: {
        home: {
            front_default: string;
        };
    }
}