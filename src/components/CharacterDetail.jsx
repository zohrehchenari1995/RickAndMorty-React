import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

function CharacterDetail() {
  return (
    <div className="character-detail">
      <div className="all__detail">
        <div className="character__image-detail">
          <img src="" alt="" />
          img
        </div>
        <div>
          <div className="character__name">👨 Rick sanchex</div>
          <div className="character__status-detail">
            <span className="status__color"></span>
            <span className="status__description">&nbsp; Dead - Human</span>
          </div>
          <div className="character__location">
            <span className="location__title">last Know location :</span>
            <span className="location__detail">cetadel of Ricks</span>
            <button className="location__button-add">Add To Favorite</button>
          </div>
        </div>
      </div>
      <div className="all__episode">
        <div className="episode__title">
          <span>List of Episode:</span>
          <ArrowDownCircleIcon className="episode__icon"/>
        </div>
        <span className="episode__role">00-s01E01 : pilot</span>
        <span className="episode__role">01-s02E02 : lawnmowerdog</span>
      </div>
    </div>
  );
}

export default CharacterDetail;
