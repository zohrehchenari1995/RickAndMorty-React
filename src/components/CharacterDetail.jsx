import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { episodes } from "../../data/data";

function CharacterDetail({ character }) {
  return (
    <div className="character-detail">
      <div className="all__detail">
        <div className="character__image-detail">
          <img src={character.image} alt={character.name} />
        </div>
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
            <button className="location__button-add">Add To Favorite</button>
          </div>
        </div>
      </div>

      
      <div className="all__episode">
        <div className="episode__title">
          <span>List of Episode:</span>
          <ArrowUpCircleIcon className="episode__icon" />
        </div>

        <ul>
          {episodes.map((item,index) => (
            
              <li  className="episode__role" key={item.id}>
                <div>
                 {String(index + 1).padStart(2,"0")}-{item.episode} : <strong>{item.name}</strong>
                </div>
                 <span className="episode__date">{new Date(item.created).toDateString()}</span>
              </li>
          
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;


