import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import toast from "react-hot-toast";

function CharacterDetail({ selectedId,onAddFavorite,isAddToFavorite }) {
// state for fetch chracterDetail
  const [character ,setCharacter] = useState(null);
  // state for  loading characterDetail
  const [isLoading , setIsLoading] = useState(false);
  // state for update episode
  const [episodes,setEpisodes] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      try{
        setIsLoading(true);
        // setCharacter(null);

        // fetch data for characterDetail
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${selectedId}`);
      setCharacter(data);

      // fetch data for episode
      const episodeId = data.episode.map((epi)=>epi.split("/").at(-1));
     
      const {data : episodeData} = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
     
      setEpisodes([episodeData].flat().slice(0,6));
      }
      catch(error){
          toast.error(error.response.data.error);
      }
      finally{
        setIsLoading(false)
      }
    }

    if(selectedId)
    fetchData()
  },[selectedId])


  // if exist loading
  if(isLoading) return (
    <div style={{flex:1}}>
      <Loader/>
      </div>
  )



  // if not exist chracter
  if(!character || !selectedId) return(
    <div style={{flex:1}}>please selecte a chracter</div>
  )

  return (
    <div className="character-detail">
      <div className="all__detail">
        {
          <div className="character__image-detail">
            <img src={character.image} alt={character.name} />
          </div>
        }
        <div>
          <div className="character__name">
            <span>{character.gender === "Male" ? "👨" : "👩"}</span>
            <span>{character.name}</span>
          </div>
          <div className="character__status-detail">
            <span
              className={`${
                character.status === "Dead"
                  ? "status__color"
                  : "status__color-live"
              }`}
            ></span>
            <span className="status__description">
              <span>&nbsp;{character.status}</span>
              <span> - &nbsp;{character.species}</span>
            </span>
          </div>
          <div className="character__location">
            <span className="location__title">last Know location :</span>
            <span className="location__detail">{character.location.name}</span>
            {
             isAddToFavorite? (<p>Already Added To Favorite ✅</p>):
              (<button onClick={()=>onAddFavorite(character)} 
              className="location__button-add">Add To Favorite</button>
            )}
          </div>
        </div>
      </div>

      <div className="all__episode">
        <div className="episode__title">
          <span>List of Episode:</span>
          <ArrowUpCircleIcon className="episode__icon" />
        </div>

        <ul>
          {episodes.map((item, index) => (
            <li className="episode__role" key={item.id}>
              <div>
                {String(index + 1).padStart(2, "0")}-{item.episode} :{" "}
                <strong>{item.name}</strong>
              </div>
              <span className="episode__date">
                {new Date(item.created).toDateString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CharacterDetail;
