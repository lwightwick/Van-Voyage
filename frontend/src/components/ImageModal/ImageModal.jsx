import "./ImageModal.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageModal = ({
  clickedImage,
  setClickedImage,
  handleRightClick,
  handleLeftClick,
}) => {
  const handleClick = (event) => {
    if (event.target.classList.contains("close")) {
      setClickedImage(null);
    }
  };

  return (
    <>
      <div className="overlay close" onClick={handleClick}>
        <img src={clickedImage} alt="bigger pic" />
        <span className="close" onClick={handleClick}>
          X
        </span>
        <div className="overlay-arrow_left">
          <FaArrowAltCircleLeft
            className="left-arrow"
            onClick={handleLeftClick}
          />
        </div>
        <div className="overlay-arrow_right">
          <FaArrowAltCircleRight
            className="right-arrow"
            onClick={handleRightClick}
          />
        </div>
      </div>
    </>
  );
};

export default ImageModal;
