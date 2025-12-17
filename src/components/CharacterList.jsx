import { EyeIcon } from "@heroicons/react/24/outline";

function CharacterList() {
  return (
    <div className="all-character__list">
      <div className="character-list">
        <div className="character__image">
          <img src="" alt="" />
          img
        </div>
        <div>
          <div className="character__name">👨 Rick sanchex</div>
          <div className="character__status">
            <span className="status__color"></span>
            <span>&nbsp; Dead - Human</span>
            </div>
        </div>
        <div className="character__eyeCheck">
          <EyeIcon className="eyeCheck"/>
        </div>
      </div>

      <div className="character-list">
        <div className="character__image">
          <img src="" alt="" />
          img
        </div>
        <div>
          <div className="character__name">👩 Rick sanchex</div>
          <div className="character__status">
            <span className="status__color-live"></span>
            <span>&nbsp; Alive - Human</span>
            </div>
        </div>
        <div className="character__eyeCheck">
          <EyeIcon className="eyeCheck"/>
        </div>
      </div>
    </div>
  );
}

export default CharacterList;
