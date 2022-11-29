import { useState } from "react";
import "./App.css";
import Books from "./components/Books";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("Cats");
  return (
    <div className="App">
      <Header className="Header" />
      <Search className="Search" setSearchTerm={setSearchTerm} />
      <Books className="Books" searchTerm={searchTerm}></Books>
    </div>
  );
}

export default App;
