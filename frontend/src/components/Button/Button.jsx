import "./Button.scss";

function Button(props) {
  return (
    <button className="button" type="submit">
      {props.text}
    </button>
  );
}

export default Button;
