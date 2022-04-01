import "./Button.scss";

function Button(props) {
  return (
    <button className="button" type="submit">
      {props.text}
      {/* <img className="button__icon" src={props.icon} alt="upload icon" /> */}
      {/* <span className="button__text">{props.text}</span> */}
    </button>
  );
}

export default Button;
