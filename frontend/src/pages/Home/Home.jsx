import "./Home.scss";
import { Component, Route, Switch } from "react";
import Button from "../../components/Button/Button";
import Image from "../../assets/Images/luna.jpg";
import Booking from "../Booking/Booking";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section>
        <h1>Let's go Vamping!</h1>
        <Link to="/booking">
          <Button text={"Book a Trip"} />
        </Link>
        <img src={Image} alt="" />
      </section>

      <section>
        <h2>The Van</h2>
        <img src={Image} alt="" />
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
