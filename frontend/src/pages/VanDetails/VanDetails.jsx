import { Link } from "react-router-dom";
import "./VanDetails.scss";
import VanPhotos from "../../components/VanPhotos/VanPhotos";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { VanImagesData } from "../../data/VanImagesData";

function VanDetails() {
  return (
    <main>
      <section>
        <h1>The Van</h1>
      </section>
      <section>
        <h2>Photo Gallery</h2>
        <ImageSlider slides={VanImagesData} />
      </section>
    </main>
  );
}

export default VanDetails;
