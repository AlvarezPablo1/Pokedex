import { useState } from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";
import { Pokemon } from "../types/pokemon.types";


const BuscarPokemon = () => {
    //Aqui deberemos almacenar en estados las entradas del usuario
    const [text, setText] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState<Pokemon | null>(null);
    
    const onBuscarClick=() => {
       // Aqui debemos guardar la entrada del usuario
        setName(text)
    }
    
    const onSeleccionarPokemon = (pokemon: Pokemon) => {
        setPokemonSeleccionado(pokemon)
    }
    
    return (
        <>
            <div id="buscarPokemon">
                <label>Buscar pokemon</label>
                <input type="text" onChange={(e) => setText(e.target.value)} placeholder={"Pikachu, Charmander, Ditto, etc"}/>
                <button onClick={() =>onBuscarClick()}>Buscar</button>
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                {/* ListadoPokemons debe recibir por props el name del pokemon a buscar */}
                <ListadoPokemons name={name} seleccionarPokemon={onSeleccionarPokemon}/> 
                <VistaPokemon  pokemonSeleccionado={pokemonSeleccionado}/>
            </div>
        </>
    );
}

export default BuscarPokemon;
