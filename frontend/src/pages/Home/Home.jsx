import "./Home.scss";
import Button from "../../components/Button/Button";
import BCRoad from "../../assets/Images/bc-road.png";
import VanSide from "../../assets/Images/van-side.png";
import VanFront from "../../assets/Images/van-front.png";
import BannerImage from "../../assets/Images/van-mountains.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="banner">
        <img className="image__banner" src={BannerImage} alt="" />
        <h1 className="banner__title">Let's go Vamping!</h1>
        <Link className="banner__button" to="/booking">
          <Button text={"Book a Trip"} />
        </Link>

        {/* <img className="image__van-side" src={VanSide} alt="" /> */}
      </section>

      <section className="the-van">
        <h2>The Van</h2>
        <img className="image__van-front" src={VanFront} alt="" />
        <Link to="/van-details">
          <Button text="Find Out More" />
        </Link>
      </section>

      <section className="places_to_go">
        <h2>Places To Go</h2>
        <div className="places_to_go__list-container">
          <ul className="places_to_go__list">
            <li>
              <img src={Image} alt="" />
              <Link to="/places-to-go">
                <Button text={"Find Out More"} />
              </Link>
            </li>
            <li>
              <img src={Image} alt="" />
              <Link to="/places-to-go">
                <Button text={"Find Out More"} />
              </Link>
            </li>
            <li>
              <img src={Image} alt="" />
              <Link to="/places-to-go">
                <Button text={"Find Out More"} />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>reviews</h2>
        <p>this is a review</p>
        <p>this is a review</p>
        <p>this is a review</p>
      </section>
    </main>
  );
}

export default Home;
