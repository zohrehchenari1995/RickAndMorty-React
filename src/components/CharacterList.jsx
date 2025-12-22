import { EyeIcon } from "@heroicons/react/24/outline";
;

function CharacterList({characters}) {
  
  return (
    <div className="all-character__list">
      {/* isSecond for change style seconde character */}
      {characters.map((item, index) => (
        <Character
          key={item.id}
          item={item}
          isSecond={index === 1}
          characters={characters}
        />
      ))}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
  return (
    <div className="character-list">
      <div className="character__image">
        <img src={item.image} alt={item.name} />
      </div>
      <div>
        <CharacterName item={item} />
        <CharacterStatusInfo item={item} />
      </div>
      <div className="character__eyeCheck">
        <EyeIcon className="eyeCheck" />
      </div>
    </div>
  );
}

// component for Name:
function CharacterName({ item }) {
  return (
    <div className="character__name">
      <span>{item.gender === "Male" ? "👨" : "👩"}</span>
      <span>{item.name}</span>
    </div>
  );
}

// component for status:
function CharacterStatusInfo({ item, isSecond }) {
  return (
    <div>
      <div className="character__status">
        <span
          className={`${
            item.status === "Dead" ? "status__color" : "status__color-live"
          }`}
        ></span>
        <span>&nbsp;{item.status}&nbsp;</span>
        <span> - {item.species}</span>
      </div>
      {isSecond && (
        <div className="special-status">
          <span></span>
        </div>
      )}
    </div>
  );
}
