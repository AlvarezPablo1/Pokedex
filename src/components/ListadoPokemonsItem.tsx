import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";



interface ListadoPokemonsItemProps {
    pokemon: Pokemon,
    seleccionarPokemon: (pokemon: Pokemon) => void
}

/**
 * Visualiza una pokemon con su nombre y url
 *
 * Ej:
 * <pre>
 *     <ListadoPokemonsItem pokemon={pokemon}
 *                             seleccionarPokemon={(pokemon) => {}}/>
 *
 * </pre>
 *
 * @author Digital House
 * @param pokemon el pokemon a mostrar
 * @param seleccionarPokemon una funcion que se ejecuta al hacer click en el pokemon y guarda en un estado el pokemon seleccionado
 */
const ListadoPokemonsItem = ({ pokemon, seleccionarPokemon }: ListadoPokemonsItemProps) =>
    <div onClick={() => seleccionarPokemon(pokemon)}>
        <strong>{pokemon.name}</strong>
        <small> #{extractPokemonId(pokemon.url)}</small>
    </div>


export default ListadoPokemonsItem;
