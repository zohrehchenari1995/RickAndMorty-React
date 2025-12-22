import { EyeIcon } from "@heroicons/react/24/outline";

function CharacterList({ allCharacters }) {
  return (
    <div className="all-character__list">
      {allCharacters.map((item,index) => (
        <Character key={item.id} item={item}  isSecond={index === 1}/>
      ))}
    </div>
  );
}

export default CharacterList;


function Character({ item,isSecond }) {
  return (
    <div className="character-list">
      <div className="character__image">
        <img src={item.image} alt={item.name} />
      </div>
      <div>
        <div className="character__name">
          <span>{item.gender === "Male" ? "👨" : "👩"}</span>
          <span>{item.name}</span>
        </div>
        <div className="character__status">
          <span
            className={`${
              item.status === "Dead" ? "status__color" : "status__color-live"
            }`}
            >

            </span>
            <span>&nbsp;{item.status}&nbsp;</span>
          <span> - {item.species}</span>
        </div>
        {isSecond && (
          <div className="special-status">
            <span></span>
          </div>
        )}


      </div>
      <div className="character__eyeCheck">
        <EyeIcon className="eyeCheck" />
      </div>
    </div>
  );
}
