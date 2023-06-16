/**
 * Represents a pokemon
 *
 * @author Digital House
 * @see https://pokeapi.co/api/v2/item-category
 */
import {Sprite} from "../types/sprite.types";


export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonWithProps extends Pokemon{
    id: number;
    sprites: Sprite
}
