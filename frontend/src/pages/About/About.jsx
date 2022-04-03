import "./About.scss";
import AliceBack from "../../assets/Images/alice-back-van.jpg";

function About() {
  return (
    <main className="page-container">
      <h1>about</h1>
      <div className="alice">
        <h2 className="alice__subtitle">meet alice...</h2>
        <img className="alice__image" src={AliceBack} />
        <p className="alice__text">
          info about alice, linking to about page for more info
        </p>
      </div>
    </main>
  );
}

export default About;
