import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Nav from "./components/Nav";
import { allCharacters, character } from "../data/data";


function App() {
  return (
    <div className="app">
      <Nav/>
    <div className="main container">
      <CharacterList allCharacters={allCharacters}/>
      <CharacterDetail character={character}/>

    </div>
    </div>
  )
}

export default App