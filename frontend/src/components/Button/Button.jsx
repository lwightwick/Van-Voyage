import "./Button.scss";

function Button(props) {
  return (
    <button className="button" type="button">
      {/* <img className="button__icon" src={props.icon} alt="upload icon" /> */}
      <p className="button__text">{props.text}</p>
    </button>
  );
}

export default Button;
