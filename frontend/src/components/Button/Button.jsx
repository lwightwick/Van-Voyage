import "./PrimaryButton.scss";

function PrimaryButton(props) {
  return (
    <button className="button" type="submit">
      {props.text}
    </button>
  );
}

export default PrimaryButton;
