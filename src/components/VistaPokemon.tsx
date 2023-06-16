import { useEffect, useState } from "react";
import {Pokemon} from "../types/pokemon.types";
import { getPokemon } from "../services/pokemon.queries";
import styles from "../assets/css/VistaPokemon.module.css"

interface Props {   
    pokemonSeleccionado: Pokemon | null
}


/**
 * Visualiza un pokemon seleccionado
 *
 * @param {string} pokemonSeleccionado pokemon almacenado con la funcion seleccionarPokemon
 * @author Digital House
 */

const VistaPokemon = ({ pokemonSeleccionado} : Props) => {
    const [isLoading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState<any | undefined>();
    //EXTRA: Pueden manejar el proceso de vista de un pokemon seleccionado pasando por props una funcion
    //que almacene en un estado el componente seleccionado y con el name de dicho pokemon hacer el fetch dentro de este 
    //componente de vista

    useEffect(() => {
        //Deberan realizar la busqueda con la variable correspondiente
        getPokemon(pokemonSeleccionado?.name || "pikachu").then(data => {
            setLoading(false);
            console.log(data);
            
            setPokemons(data)
        });
    },[pokemonSeleccionado]);


    if (isLoading) return <div>Cargando pokemons...</div>


    return pokemons ? (
        <div className={styles.vistaCategoria}>
            <section key={pokemons.id}>
                <h3>{pokemons.name}</h3>
                <img src={pokemons.sprites.other.home.front_default} alt={pokemons.name}/>
            </section>
        </div>
    ): null;
}

export default VistaPokemon;
