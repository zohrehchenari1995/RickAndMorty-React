import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Nav, { Favorite, NavbarResult, Search } from "./components/Nav";
import { useEffect, useState } from "react";
import { allCharacters } from "../data/data";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  // state for show message to user when delay show data
  const [isLoading, setIsLoading] = useState(false);
  // state for search navbr
  const [query, setQuery] = useState("");
  // state for show detaile after select character
  const [selectedId, setSelectedId] = useState(null);
  // state for favorite for heart icon dynamic
  const [favorite, setFavorite] = useState([]);

  // event handler function
  const handleshowDetail = (id) => {
    // for dubleclick close
    setSelectedId((prevId) => (prevId === id ? null : id));
  };
  // console.log(selectedId);

  const handleAddFavorite = (char) => {
    setFavorite((prevFav) => [...prevFav, char]);
  };
  // check for exist character in favorite list or not exist
  const isAddToFavorite = favorite.map((fav) => fav.id).includes(selectedId);

  // fetchData with useEffect in render logic
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      // update state for loading in first time
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`,
          { signal }
        );

        setCharacters(data.results.slice(0, 4));
      } catch (error) {
        // for not show characters when have error
        if(!axios.isCancel(error)){
          setCharacters([]);
          toast.error(error.response.data.error);
        }
    
       
      } finally {
        // for is not repeate setIsLoading in try and catch
        setIsLoading(false);
      }
    }
    // filter for if user type less 3 string not show result
    // if (query.length < 3) {
    //   setCharacters([]);
    //   return;
    // }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div className="app">
      <Toaster />

      <Nav>
        <Search query={query} setQuery={setQuery} />
        <NavbarResult numOfResult={characters.length} />
        <Favorite numOfFavorite={favorite.length} />
      </Nav>

      <Main characters={characters}>
        <CharacterList
          characters={characters}
          isLoading={isLoading}
          onSelectedCharacter={handleshowDetail}
          selectedId={selectedId}
        />
        <CharacterDetail
          selectedId={selectedId}
          onAddFavorite={handleAddFavorite}
          isAddToFavorite={isAddToFavorite}
        />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main container">{children}</div>;
}
