import {useEffect, useState} from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import {buscarPokemons} from "../services/pokemon.queries";
import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";
import styles from "../assets/css/ListadoPokemon.module.css"

interface Props {
    name: string,
    seleccionarPokemon: (pokemon: Pokemon) => void;
}

/**
 * Visualiza una lista de pokemons
 *
 * Ej:
 * <pre>
 *     <ListadoPokemons />
 * </pre>
 * @param {string} name nombre del pokemon a buscar
 * @param seleccionarPokemon una funcion que se ejecuta al hacer click en el pokemon y guarda en un estado el pokemon seleccionado
 * @author Digital House
 */
const ListadoPokemons = ({name, seleccionarPokemon} : Props) => {
    const [isLoading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

    useEffect(() => {
        //Deberan realizar la busqueda con la variable correspondiente
        buscarPokemons(name).then(data => {
            setLoading(false);
            setPokemons(data);
        });
    },[name])

    if (isLoading) return <div>Cargando pokemons...</div>

    return (
        <div className={styles.listadoCategorias}>
            {pokemons && pokemons.map((pokemon: Pokemon) => (
                <ListadoPokemonsItem pokemon={pokemon}
                    seleccionarPokemon={seleccionarPokemon}
                    key={extractPokemonId(pokemon.url)}/>
            ))}
        </div>
    );
}

export default ListadoPokemons;
