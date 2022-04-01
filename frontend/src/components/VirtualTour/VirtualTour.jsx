import React from "react";
import Luna from "../../assets/Images/luna.jpg";

function VirtualTour() {
  return (
    <section className="virtual-tour">
      <h2 className="virtual-tour__subtitle">inside brandi</h2>
      <img className="virtual-tour__image" src={Luna} alt="" />
    </section>
  );
}

export default VirtualTour;
