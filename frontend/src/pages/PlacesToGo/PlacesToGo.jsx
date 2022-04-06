import "./PlacesToGo.scss";
import SunshineCost from "../../assets/Images/sunshine-coast.jpg";
import Lillooet from "../../assets/Images/lillooet.jpg";
import Pender from "../../assets/Images/pender.jpg";

function PlacesToGo() {
  return (
    <main className="places-to-go__page-container">
      <h1>Places To Go</h1>
      <p>This page is still under construction, check back soon!</p>
      <div className="places_to_go__container">
        <div className="places_to_go__card">
          <h2 className="places_to_go__subtitle">Sunshine Coast</h2>
          <img
            className="places_to_go__image"
            src={SunshineCost}
            alt="sunshine coast"
          />
        </div>
        <div className="places_to_go__card">
          <h2 className="places_to_go__subtitle">Pender Island</h2>
          <img
            className="places_to_go__image"
            src={Pender}
            alt="pender island"
          />
        </div>
        <div className="places_to_go__card">
          <h2 className="places_to_go__subtitle">Lillooet</h2>
          <img className="places_to_go__image" src={Lillooet} alt="Lillooet" />
        </div>
      </div>
    </main>
  );
}

export default PlacesToGo;
