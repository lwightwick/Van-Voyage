import "./VanDetails.scss";
import VanImageSlider from "../../components/VanImageSlider/VanImageSlider";
import { VanImagesData } from "../../data/VanImagesData";
import BehindScenesImageGallery from "../../components/BehindScenesImageGallery/BehindScenesImageGallery";
import VirtualTour from "../../components/VirtualTour/VirtualTour";

function VanDetails() {
  return (
    <main className="van-page">
      <h1 className="van-page__title">about brandi</h1>
      <VanImageSlider className="image-slider" slides={VanImagesData} />
      <VirtualTour />
      <BehindScenesImageGallery />
    </main>
  );
}

export default VanDetails;
