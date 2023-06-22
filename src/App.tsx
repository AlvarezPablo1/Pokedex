import './App.css'
import BuscarPokemon from './components/BuscarPokemon'

function App() {

  return (
    <div className="App">
            <h1>Pokédex</h1>
            <div className="bandejaDeEntrada">
                <div className="ContenedorApp">
                    <BuscarPokemon />
                </div>
            </div>
        </div>
  )
}

export default App
