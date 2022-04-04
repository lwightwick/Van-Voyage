import React from "react";
import ReactDOM from "react-dom";
import { Pannellum } from "pannellum-react";
import myImage from "../../assets/Images/virtual-tour.png";
import "./VirtualTour.scss";

// import "./styles.css";

function VirtualTour() {
  return (
    <div className="virtual-tour">
      <h2 className="virtual-tour__title">inside brandi</h2>
      <Pannellum
        className="virtual-tour__image"
        width="100%"
        height="550px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {}}
      ></Pannellum>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<VirtualTour />, rootElement);

export default VirtualTour;
