import "./Home.scss";
import { Component, Route, Switch } from "react";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <div>
      <main>
        <section>
          <h1>Let's go Vamping!</h1>
          <Button text={"Book a Trip"} />
          <img src="../../assets/Images/luna.jpg" alt="" />
        </section>
      </main>
    </div>
  );
}

export default Home;
