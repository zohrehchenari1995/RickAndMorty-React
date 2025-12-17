import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="app">
      <NavBar/>
    <div className="main container">
      <CharacterList/>
      <CharacterDetail/>

    </div>
    </div>
  )
}

export default App