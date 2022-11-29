import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Pokemons from "./components/Pokemons";

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <Filter className="Filter"></Filter>
      <Pokemons className="Pokemons"></Pokemons>
    </div>
  );
}

export default App;
