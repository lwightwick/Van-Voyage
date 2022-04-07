import "./VanDetails.scss";
import VanImageSlider from "../../components/VanImageSlider/VanImageSlider";
import { VanImagesData } from "../../data/VanImagesData";
import BehindScenesImageGallery from "../../components/BehindScenesImageGallery/BehindScenesImageGallery";
import VirtualTour from "../../components/VirtualTour/VirtualTour";

function VanDetails() {
  return (
    <main className="van-page">
      <div className="van-page__title-container">
        <h1 className="van-page__title">about brandi vanlisle</h1>
        <p className="van-page__description">
          (Named after Alice's favourite singer-songwriter, Brandi Carlisle)
        </p>
      </div>
      <VanImageSlider slides={VanImagesData} />
      <VirtualTour />
      <BehindScenesImageGallery />
    </main>
  );
}

export default VanDetails;
