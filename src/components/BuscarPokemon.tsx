import { useState } from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";
import { Pokemon } from "../types/pokemon.types";
import styles from "../assets/css/BuscarPokemon.module.css"
import { useAppDispatch } from "../redux/hooks";
import { guardarNombrePoekmon } from "../redux/slices/findPokemonSlice";

const BuscarPokemon = () => {
    //Aqui deberemos almacenar en estados las entradas del usuario
    // const [text, setText] = useState<string>("");
    // const [name, setName] = useState<string>("");
    const dispatch = useAppDispatch();
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState<Pokemon | null>(null);
    
    const onSeleccionarPokemon = (pokemon: Pokemon) => {
        setPokemonSeleccionado(pokemon)
    }
    
    return (
        <>
            <div className={styles.buscarPokemon}>
                <label>Buscar pokemon</label>
                <input type="text" onChange={(e) => dispatch(guardarNombrePoekmon(e.target.value))} placeholder={"Pikachu, Charmander, Ditto, ..."}/>
                {/* <button onClick={dispatch}>Buscar</button> */}
            </div>
            <div className={styles.container}>
                {/* ListadoPokemons debe recibir por props el name del pokemon a buscar */}
                <ListadoPokemons seleccionarPokemon={onSeleccionarPokemon}/> 
                <VistaPokemon  pokemonSeleccionado={pokemonSeleccionado}/>
            </div>
        </>
    );
}

export default BuscarPokemon;
