import "./About.scss";
import AliceBack from "../../assets/Images/alice-back-van.jpg";

function About() {
  return (
    <main className="about__page-container">
      <h1>about</h1>
      <p>This page is still under construction, check back soon!</p>
      <div className="alice">
        <h2 className="alice__subtitle">meet alice...</h2>
        <img className="alice__image" src={AliceBack} />
        <p className="alice__text">
          Alice is an experience, red-seal wood-worker with a love for the
          outdoor lifestyle.
        </p>
      </div>
    </main>
  );
}

export default About;
