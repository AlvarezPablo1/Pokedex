import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  pokemonName : string
}

const initialState: InitialState ={
  pokemonName: ""
}

const findPokemonlice = createSlice({
  name: "findPokemonlice",
  initialState,
  reducers: {
    guardarNombrePoekmon: (state, action: PayloadAction<string>) =>{
      state.pokemonName = action.payload
    }
  }
})

export const {guardarNombrePoekmon} = findPokemonlice.actions

export default findPokemonlice.reducer