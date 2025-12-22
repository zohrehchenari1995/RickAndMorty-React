import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Nav, { NavbarResult } from "./components/Nav";
import { useState } from "react"
import { allCharacters } from "../data/data";



function App() {
  const [characters, setCharacters] = useState(allCharacters);
  return (
    <div className="app">
      <Nav>
         <NavbarResult numOfResult={characters.length}/>
      </Nav>
      <Main characters={characters}>
        <CharacterList characters={characters}/>
      <CharacterDetail />
      </Main>
    </div>
  )
}

export default App

function Main({children}){
  return(
    <div className="main container">
     {children}
    </div>
  )
}