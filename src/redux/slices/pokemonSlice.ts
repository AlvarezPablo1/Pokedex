import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  menssage : string
}

const initialState: InitialState ={
  menssage : ""
}

const pokemonSlice = createSlice({
  name: "pokeonslice",
  initialState,
  reducers: {}
})


export default pokemonSlice.reducer