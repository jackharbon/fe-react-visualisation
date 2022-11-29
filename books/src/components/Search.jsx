import { useState } from "react";

function Search({ setSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(event) => setNewSearchTerm(event.target.value)}
        value={newSearchTerm}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
