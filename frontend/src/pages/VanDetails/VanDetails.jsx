import "./VanDetails.scss";
import VanImageSlider from "../../components/VanImageSlider/VanImageSlider";
import { VanImagesData } from "../../data/VanImagesData";
import BehindScenesImageGallery from "../../components/BehindScenesImageGallery/BehindScenesImageGallery";
import VirtualTour from "../../components/VirtualTour/VirtualTour";

function VanDetails() {
  return (
    <main className="van-page">
      <h1 className="van-page__title">The Van</h1>
      <VanImageSlider className="image-slider" slides={VanImagesData} />
      <VirtualTour />

      {/* <section className="virtual-tour">
      <h2 className="virtual-tour__subtitle">inside brandi</h2>
      <img className="virtual-tour__image" src={Luna} alt="" />
    </section> */}
      <BehindScenesImageGallery />
    </main>
  );
}

export default VanDetails;
